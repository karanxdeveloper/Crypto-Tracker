import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    height: '90vh',
    boxSizing: 'border-box'
  }}>
    {/* First Box */}
    <div style={{ flex: 1 }}>
      <ContentLoader
        speed={1}
        backgroundColor={'#333'}
        foregroundColor={'#999'}
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%' }}
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
      </ContentLoader>
    </div>

    {/* Second Box */}
    <div style={{ flex: 1 }}>
      <ContentLoader
        speed={1}
        backgroundColor={'#333'}
        foregroundColor={'#999'}
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%' }}
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
      </ContentLoader>
    </div>
  </div>
);

export default MyLoader;