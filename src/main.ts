import "./tailwind.css";
import App from "./App.svelte";
import "medblocks-ui/dist/shoelace";


const app = new App({
  target: document.getElementById('app')
})

export default app
