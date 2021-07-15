//#1D1C1E

function SvgIllu(props) {
  return (
    <svg
      width={400}
      height={400}
      fill="none"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M250 500c138.071 0 250-111.929 250-250S388.071 0 250 0 0 111.929 0 250s111.929 250 250 250zm47.463-427.802c-.374-5.05-.187-5.517 2.993-8.603 3.74-3.834 4.021-3.928 6.826-1.964 2.619 1.87 4.208 7.668 3.46 12.438-.374 2.431-.187 3.927.561 4.395.561.374 5.331.561 10.474.561 18.423-.28 27.4 2.9 37.967 13.28 3.647 3.646 6.733 7.106 6.733 7.574 0 .468-1.028 2.244-2.337 3.928-1.31 1.683-2.338 3.46-2.338 3.927 0 1.123 2.244 2.058 4.675 2.058 2.338 0 2.806.841 3.274 6.452.187 2.619.654 5.144.935 5.705.654 1.028.935.935 12.157-3.834 9.164-3.835 18.048-5.237 21.134-3.367 1.029.655 1.777 1.496 1.777 2.057.093 1.871 3.367 4.863 6.078 5.518.945.222 2.581.543 4.323.885h.004c1.19.234 2.429.477 3.529.705 6.546 1.215 19.17 7.107 23.659 11.034 4.489 3.928 8.51 10.287 11.596 18.329 3.647 9.632 4.302 25.53 1.309 35.162-3.179 10.661-6.078 15.43-14.308 23.753-12.25 12.251-22.443 16.365-40.959 16.365h-10.848l-3.18 3.554c-1.87 1.87-4.769 5.798-6.639 8.603-2.899 4.676-22.07 25.343-35.349 38.248-2.806 2.712-7.388 5.985-10.006 7.294-4.021 1.871-6.359 4.115-12.625 11.877-17.3 21.602-35.068 40.211-47.038 49.376-4.956 3.834-7.294 6.452-9.819 11.128-5.05 9.071-10.38 16.459-17.207 23.753-5.143 5.424-6.078 6.92-5.704 8.884.28 1.309.841 6.827 1.122 12.438.374 7.855.187 11.502-1.122 16.832-5.96 24.71-28.104 42.752-53.344 42.737-8.12-.005-20.534-3.273-20.534-3.273l-6.546-3.273c-7.387-3.741-16.458-11.69-21.321-18.984-7.014-10.193-10.754-26.371-8.978-38.435l.114-.777.136-.932.13-.903.001-.003v-.001c.323-2.234.606-4.187.742-4.865.187-1.496-.468-1.777-4.77-1.964-8.323-.28-12.157-4.488-12.998-14.401-.374-4.676-.187-5.611 2.244-8.978 2.525-3.46 2.899-3.647 7.107-3.366 4.676.28 4.956 0 3.46-2.712-.748-1.496-.187-2.151 4.115-4.582 4.933-2.793 5.327-2.806 22.02-3.359l.237-.008c21.695-.748 36.845-3.366 38.434-6.733.749-1.683 1.684-2.151 4.489-2.151 4.021 0 5.424-1.403 3.367-3.46-1.216-1.309-2.058-1.122-7.482 1.029-4.769 1.87-7.668 2.431-13.466 2.338-4.021 0-17.768 1.309-30.579 2.899-3.762.442-7.36.868-10.574 1.249l-.235.028-.014.002-.013.001c-7.516.891-12.872 1.525-13.198 1.525-3.373 0-7.19 1.894-11.281 3.924-4.722 2.343-9.808 4.867-14.997 4.867-10.006-.094-33.478-6.453-33.478-9.165 0-.468 1.59-2.525 3.46-4.489 4.395-4.488 3.554-6.546-2.899-7.481-6.359-.842-11.97-4.582-15.523-10.1-6.079-9.538-7.388-17.955-3.274-22.069 1.964-1.964 2.806-2.151 6.266-1.684 7.481 1.029 11.502 2.432 19.825 6.734 7.2 3.647 8.51 4.769 9.82 7.855.841 1.964 1.776 3.553 2.15 3.553 1.683 0 11.128-4.769 17.114-8.603 6.733-4.395 16.645-12.157 23.659-18.703 3.834-3.554 4.021-3.928 3.741-8.51l-.281-4.676-4.582-1.309c-6.266-1.87-8.884-3.834-19.451-14.775-15.898-16.553-26.185-34.414-27.494-47.787-.374-3.553-1.216-7.2-2.057-8.042-.935-1.216-1.216-2.805-.842-5.611.655-5.05-.468-11.035-4.208-22.537l-2.9-9.071-4.394.561c-5.05.655-8.323-.655-12.625-5.143-2.338-2.525-2.712-3.647-2.712-7.856 0-8.79 7.949-27.867 12.718-30.486 2.057-1.215 2.993-1.028 9.539 1.684 8.136 3.366 10.1 3.273 9.819-.562-.094-1.496-.094-4.114.093-5.891l.187-3.273s0-4.208 1.176-6.546c3.286-3.697 8.737-6.022 13.5-8.055h.002l.003-.002.002-.001c.657-.28 1.3-.554 1.923-.826 8.71-3.899 17.525 4.051 21.596 7.722.519.468.961.866 1.315 1.162 2.487 2.073 2.434 3.998 2.389 5.582-.005.202-.011.399-.011.59 0 1.122 1.216 4.021 2.712 6.359 3.647 6.078 4.208 8.136 2.338 8.884-1.122.374-1.309 1.216-.935 2.992.374 1.31.187 3.741-.468 5.331-.935 2.525-.748 3.46.749 6.265 3.086 5.331 5.143 4.676 27.867-8.884 12.999-7.761 16.833-9.632 21.602-10.099 2.619-.281 6.733-1.59 9.258-2.899 5.518-2.993 12.812-5.237 16.833-5.237 2.244 0 3.273-.561 4.021-2.338 1.216-2.712 6.266-6.079 9.071-6.079 1.029 0 2.619.749 3.367 1.684 1.87 2.151 16.832 4.395 19.544 2.992 3.367-1.777 3.273-4.582-.28-8.323-1.777-1.87-3.741-4.956-4.302-6.826-.654-1.871-1.59-3.741-2.244-4.208-1.684-1.216-10.754-4.676-15.617-5.892-4.302-1.122-11.222-4.395-14.402-6.827-1.776-1.309-1.776-1.402.187-2.43 1.123-.562 8.884-2.152 17.207-3.461 8.417-1.31 15.898-2.899 16.646-3.46 1.309-1.029 27.68-1.31 53.304-.468l8.884.28-.281-5.33zm-48.067 92.207c-2.525-1.59-6.078-2.712-10.006-3.273-9.351-1.216-14.121-1.029-14.121.467 0 1.216-1.964 3.367-8.136 8.791-3.927 3.46-15.897 8.416-33.946 14.12-14.214 4.489-21.228 5.798-32.263 5.892-4.582 0-8.977.468-9.538 1.029-2.244 1.683-1.309 4.208 1.964 5.33 3.647 1.216 11.596 9.819 12.624 13.84.561 2.058 1.216 2.525 3.273 2.338 1.403-.093 3.928-1.122 5.518-2.338 3.179-2.338 5.517-3.553 11.409-5.891 2.057-.842 4.769-2.525 6.078-3.741 2.525-2.338 9.165-6.078 10.848-6.078.561 0 2.618-1.029 4.489-2.338 2.431-1.683 5.237-2.525 9.819-2.899l6.452-.655 4.021 3.647c2.245 2.058 7.669 6.079 12.064 8.978 6.266 4.208 9.819 5.891 16.833 7.762 4.863 1.309 11.035 2.992 13.653 3.74 7.575 2.245 9.632 1.87 11.128-1.683 2.151-5.33 3.367-17.394 2.712-28.242-.748-11.97-1.309-13.559-5.05-13.559-5.33 0-15.991-2.806-19.825-5.237zm-26.278-30.58c.375.842 1.59 2.432 2.899 3.554l2.151 1.87-2.151 2.057c-1.215 1.122-4.3 4.207-7.011 6.918l-.001.001-.001.002c-4.582 4.675-5.331 5.049-13.56 7.013-4.769 1.122-14.121 3.554-20.854 5.331-17.3 4.582-27.213 5.33-22.631 1.683 8.791-7.201 12.906-10.38 15.898-12.157 1.87-1.122 3.46-2.432 3.554-2.712.187-1.87.748-4.115 1.028-4.208.144-.072 1.006-.697 2.162-1.534l.001-.001.004-.003.003-.002.008-.006.019-.014.008-.005a475.3 475.3 0 011.068-.773c1.684-1.122 4.396-2.058 6.172-2.058 1.684 0 3.554-.467 4.021-.935 1.684-1.683 10.474.748 11.783 3.086 1.497 2.899 2.712 3.46 4.863 2.338 2.245-1.122 7.481-7.107 7.668-8.603.188-2.058.375-2.432 1.31-2.432.561 0 1.309.749 1.589 1.59z"
        fill="#1D1C1E"
      {...props}

      />
      <path
        d="M259.362 234.634c-8.928-.685-27.392-1.402-34.093-1.402-1.919 0-3.954-.164-6.119 0-6.087.459-12.967 1.063-18.724-1.696-1.938-.929-4.371-.765-5.648.963-7.42 10.038-14.98 26.484-18.645 31.125-6.095 7.719-37.028 23.331-56.873 30.892-3.765 1.435-5.812-2.42-2.757-5.046l8.877-7.631a4.008 4.008 0 011.549-.826c13.694-3.794 38.348-12.217 45.301-20.005 8.878-9.943 17.573-37.715 24.944-35.725 7.371 1.99 7.817 4.83 21.976 4.83 14.16 0 24.813.711 40.212 1.776 9.683.67 19.762 5.105 23.11 14.491.409 1.146 1.197 2.142 2.303 2.649a428.457 428.457 0 008.546 3.806c1.501.65 3.253.318 4.383-.865 2.874-3.01 5.069-5.666 8.404-9.783 3.11-3.839 5.924-8.226 8.586-12.559 1.356-2.208 3.348-1.912 2.061.338-2.375 4.153-8.383 11.391-18.415 24.835a4.032 4.032 0 01-5.065 1.187c-3.132-1.607-7.961-4.068-10.832-5.453-1.259-.608-2.159-1.786-2.454-3.152-.806-3.728-1.792-4.788-4.729-7.138-2.338-1.87-6.969-4.925-15.898-5.611z"
        fill="#1D1C1E"
      {...props}

      />
    </svg>
  )
}

export default SvgIllu