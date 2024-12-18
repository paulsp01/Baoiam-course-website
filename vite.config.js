import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{

    __VALUE__: `${process.env.VALUE}`,
    host:"0.0.0.0",
    fs:{
      strict:false,
    },
  },
  plugins: [react()],
})
