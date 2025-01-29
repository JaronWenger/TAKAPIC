const MainCard = ({ handleBuyClick }) => {
    return (
        <div style={{
            paddingTop: '120px',
            paddingBottom: '150px', // Add bottom padding to prevent cutting off the button
          }}>
      <div
        style={{
          width: '80%',
          height: 'auto', // Ensure the height adjusts based on content
          margin: '0 auto',
          marginTop: '3rem',

          backgroundColor: 'white',
          padding: '0px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          position: 'relative',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          paddingBottom: '40px', // Add bottom padding to prevent cutting off the button
        }}
      >
        <div
          className="card-text-container"
          style={{
            position: 'relative', // Ensure text stays in normal flow
            top: '3rem',
            left: '3%',
            maxWidth: '35rem',
            fontSize: '1.4rem',
            color: 'black',
            zIndex: 2,
            textAlign: 'left',
            padding: '10px',
            fontWeight: 'bold',
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            overflow: 'hidden',
          }}
        >
          <h1
            className="main-heading"
            style={{
              fontSize: '1rem',
              color: 'black',
              zIndex: 2,
              textAlign: 'left',
              padding: '10px',
              fontWeight: 'bold',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            <span
              className="primary-line"
              style={{
                fontSize: '3rem',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                lineHeight: '1',
              }}
            >
              Star in movie scenes using AI
            </span>
            <div className="line-break" style={{ marginBottom: '1rem' }}></div>
            Effortlessly create cinematic masterpieces from your photos, all without the need for expensive special effects teams or Hollywood studios
            <div className="line-break" style={{ marginBottom: '0rem' }}></div>
            🤳{' '}
            <span
              className="action-link"
              onClick={handleBuyClick}
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Ensure font here too
              }}
            >
              <strong
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Explicit font on <strong> as well
                }}
              >
                Upload selfies
              </strong>
            </span>{' '}
            for AI magic
            <div className="line-break" style={{ marginBottom: '0rem' }}></div>
            🎬{' '}
            <span
              className="action-link"
              onClick={handleBuyClick}
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Ensure font here too
              }}
            >
              <strong
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Explicit font on <strong> as well
                }}
              >
                Choose a genre
              </strong>
            </span>{' '}
            Sci-Fi, Fantasy, and more
            <div className="line-break" style={{ marginBottom: '0rem' }}></div>
            ⚡️{' '}
            <span
              className="action-link"
              onClick={handleBuyClick}
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Ensure font here too
              }}
            >
              <strong
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Explicit font on <strong> as well
                }}
              >
                Get your own Flux AI clone
              </strong>
            </span>{' '}
            to bring your photos to life
            <div className="line-break" style={{ marginBottom: '0rem' }}></div>
            🎥{' '}
            <span
              className="action-link"
              onClick={handleBuyClick}
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Ensure font here too
              }}
            >
              <strong
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Explicit font on <strong> as well
                }}
              >
                Generate epic movie scenes
              </strong>
            </span>{' '}
            with one click
            <div className="line-break" style={{ marginBottom: '0rem' }}></div>
            💫{' '}
            <span
              className="action-link"
              onClick={handleBuyClick}
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Ensure font here too
              }}
            >
              <strong
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Explicit font on <strong> as well
                }}
              >
                Share your clips
              </strong>
            </span>{' '}
            – be the star of your own film
          </h1>
        </div>
  
        <button
          className="upload-button2"
          onClick={handleBuyClick}
        >
          Upload Photos {'\u279C'}
        </button>
      </div>
      </div>
    );
};
  
export default MainCard;
