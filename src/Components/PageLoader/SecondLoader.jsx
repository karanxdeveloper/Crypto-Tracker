import ContentLoader from "react-content-loader";

const MyLoader2 = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '100vw',
    boxSizing: 'border-box'
  }}>
    <div style={{
      width: '80vw',
      height: '80%',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <ContentLoader
        speed={1.5}
        backgroundColor={'#333'}
        foregroundColor={'#999'}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 800 660"
      >
        {/* Main Container Rectangle */}
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        
        {/* Table Rows & Columns */}
        {[...Array(11)].map((_, rowIndex) => (
          <g key={rowIndex} transform={`translate(0, ${rowIndex * 60})`}>
            {/* Columns */}
            <rect x="5%" y="20" rx="3" ry="3" width="20%" height="15" />
            <rect x="30%" y="20" rx="3" ry="3" width="20%" height="15" />
            <rect x="55%" y="20" rx="3" ry="3" width="20%" height="15" />
            <rect x="80%" y="20" rx="3" ry="3" width="15%" height="15" />
            
            {/* Horizontal Line */}
            <rect x="2%" y="55" rx="2" ry="2" width="96%" height="2" />
          </g>
        ))}
      </ContentLoader>
    </div>
  </div>
);

export default MyLoader2;