import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './location.module.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Breadcrumb = ({ nameProduct }) => {
  const location = useLocation();

const namepath = location.pathname
  .split('/')
  .filter(p => p)
  .map(p => decodeURIComponent(p)); // 👈 THÊM decode ở đây

  let breadcrumbs = [];
  let path = '';

  const labelMap = {
    samsung: 'Samsung',
    iphone: 'iPhone',
    // Thêm các nhãn khác nếu có
  };

  if (namepath[0] === 'Detail') {
    // Lấy label trước đó từ sessionStorage
    const lastLabel = sessionStorage.getItem('lastLabel');

    breadcrumbs = [];

    if (lastLabel) {
      breadcrumbs.push({
        label: labelMap[lastLabel] || lastLabel,
        link: `/label/${lastLabel}`,
      });
    }

    breadcrumbs.push({
      label: nameProduct || 'Sản phẩm',
      link: location.pathname,
    });
  }

  else if (namepath[0] === 'label') {
    breadcrumbs = [
      {
        label: labelMap[namepath[1]] || namepath[1],
        link: location.pathname,
      },
    ];

    // Cập nhật label hiện tại vào sessionStorage
    sessionStorage.setItem('lastLabel', namepath[1]);
  }

  else {
    // Trường hợp khác nếu cần
    breadcrumbs = namepath.map((part) => {
      path += `/${part}`;
      return {
        label: labelMap[part] || path,
        link: path,
      };
    });
  }

  return (
    <nav style={{ padding: '10px 0' }} className={styles.mainNavigation}>
      <Link to="/" className={styles.Link}>Home</Link>
      {breadcrumbs.map((crumb, i) => (
        <span key={i}>
         <FontAwesomeIcon icon={faChevronRight} className={styles.iconRight} />
          <Link to={crumb.link}  className={styles.Link}>{crumb.label}</Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
