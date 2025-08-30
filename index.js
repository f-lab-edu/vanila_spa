import HomePage from './pages/home.js';
import APage from './pages/A.js';

let currentDOMTree = undefined;
let nextDOMTree = {};

const router = [
  {
    path: '/',
    element: HomePage
  },
  {
    path: '/A',
    element: APage
  },
];

function dynamicRender() {
  const rootElement = document.getElementById('root');
  const currentPath = window.location.pathname;
  
  if (currentDOMTree === undefined) {
    const renderFunction = router.find(route => route.path === currentPath).element;
    renderFunction(nextDOMTree, 'root', true, navigate);
    currentDOMTree = { ...nextDOMTree };
  } else {
    // 변경된 부분만 찾아서 업데이트
    rootElement.innerHTML = '';

    const renderFunction = router.find(route => route.path === currentPath).element;
    renderFunction(nextDOMTree, 'root', true, navigate);
    
    currentDOMTree = { ...nextDOMTree };
  }
}


function handleRouting() {  
  const currentPath = window.location.pathname;
  const renderFunction = router.find(route => route.path === currentPath).element;
  
  nextDOMTree = {};
  
  renderFunction(nextDOMTree, 'root', false, navigate);
  
  dynamicRender();
}

function navigate(path) {
  window.history.pushState({}, '', path);
  
  handleRouting();
}

function render() {
  window.addEventListener('popstate', () => {
    handleRouting();
  });

  handleRouting();
}

render();

