import './index.css'

export default function Maintenance() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <div className="maintenance-icon">🔧</div>
        <h1 className="maintenance-title">
          Em <span>Manutenção</span>
        </h1>
        <p className="maintenance-subtitle">
          Estamos trabalhando para trazer novidades incríveis para você.<br />
          Voltaremos em breve!
        </p>

        <div className="maintenance-progress">
          <div className="progress-dot" />
          <div className="progress-dot" />
          <div className="progress-dot" />
          <div className="progress-dot" />
          <div className="progress-dot" />
        </div>

        <div className="maintenance-info">
          <div className="maintenance-card">
            <div className="maintenance-card-icon">🚀</div>
            <div className="maintenance-card-label">Melhorias</div>
            <div className="maintenance-card-value">Novas Features</div>
          </div>
          <div className="maintenance-card">
            <div className="maintenance-card-icon">🎨</div>
            <div className="maintenance-card-label">Design</div>
            <div className="maintenance-card-value">Nova Interface</div>
          </div>
          <div className="maintenance-card">
            <div className="maintenance-card-icon">⚡</div>
            <div className="maintenance-card-label">Performance</div>
            <div className="maintenance-card-value">Mais Rápido</div>
          </div>
        </div>
      </div>

      <div className="maintenance-footer">
        © {new Date().getFullYear()} NRS School. Todos os direitos reservados.
      </div>
    </div>
  )
}
