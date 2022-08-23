interface ThemeProps {
  background: string;
  text: string;
  border: string;
}

export interface Theme {
  primary: ThemeProps;
  secondary: ThemeProps;
}

const light: Theme = {
  primary: {
    background: '#1abc9c',
    text: '#222',
    border: '#f1c40f',
  },
  secondary: {
    background: '#16a085',
    text: '#fff',
    border: '#f1c40f',
  },
};

const dark: Theme = {
  primary: {
    background: '#2c3e50',
    text: '#fff',
    border: '#95a5a6',
  },
  secondary: {
    background: '#34495e',
    text: '#fff',
    border: '#95a5a6',
  },
};

export const theme = {
  light,
  dark,
};
