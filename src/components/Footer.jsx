export default function Footer() {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '10px',
      color: '#333',
      bottom: 0,
      left: 0,
      textAlign: 'center',
    }}>
      <p style={{ margin: 0 }}>
        Todos los derechos reservados © Abraham Otero
      </p>
    </footer>
  );
}