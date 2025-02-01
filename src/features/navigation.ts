export const navigation = (params) => {
    const id = params.get('id');
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else {
        console.warn(`Element with id "${id}" not found.`);
      }
    } else {
      const rootElement = document.getElementById('root');  // Fix here: removed the `#` symbol
      if (rootElement) {
        rootElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else {
        console.warn("Root element not found.");
      }
    }
  };