export interface Theme {
  background: string;
  text: string;
}

const light: Theme = {
  background: '#f0f2f5',
  text: '#333',
};

const dark: Theme = {
  background: '#333',
  text: '#fff',
};

export const theme = {
  light,
  dark,
};
