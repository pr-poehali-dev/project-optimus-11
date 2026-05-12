export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center text-white/60">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://vk.com/radiologyart"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
          aria-label="VKontakte"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
          </svg>
        </a>
        <a
          href="https://max.ru/join/W_9gST8pFWDy8yplJ8sC9WUF9XuQU6ttrbjtzG5mkG4"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
          aria-label="Max"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.26 14.4l-2.95-.924c-.641-.2-.654-.641.136-.953l11.527-4.448c.537-.194 1.006.131.589.173z" />
          </svg>
        </a>
        <a
          href="https://dzen.ru/id/6625fe9426b0b07859221c96"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
          aria-label="Дзен"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11.996 0C5.372 0 0 5.372 0 11.996 0 18.628 5.372 24 11.996 24 18.628 24 24 18.628 24 11.996 24 5.372 18.628 0 11.996 0zM12.5 12.5c-.34 3.576-1.195 6.433-2.5 8.5-1.305-2.067-2.16-4.924-2.5-8.5C11.076 12.16 13.933 11.305 16 10c-2.067 1.305-3.5 2.5-3.5 2.5zm-.5-.5S10.805 10.695 9.5 8.628C11.567 7.323 14.424 6.468 18 6.128c-.34 3.576-1.195 6.433-2.5 8.5-1.305-2.067-3.5-2.628-3.5-2.628zM12 11.5S10.695 13.195 8.628 14.5C7.323 12.433 6.468 9.576 6.128 6c3.576.34 6.433 1.195 8.5 2.5-2.067 1.305-2.628 3-2.628 3zm.5.5c.34-3.576 1.195-6.433 2.5-8.5 1.305 2.067 2.16 4.924 2.5 8.5-3.576-.34-6.433-1.195-8.5-2.5 2.067-1.305 3.5-2.5 3.5-2.5z" />
          </svg>
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Попов Алексей. Все права защищены.</p>
      <p className="text-xs mt-2 text-white/40">Попов Алексей Юрьевич, ИНН 644101988643</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Политика конфиденциальности</a>
        <a href="/offer" className="text-xs text-white/40 hover:text-white/70 transition-colors">Договор оферты</a>
      </div>
    </footer>
  );
}