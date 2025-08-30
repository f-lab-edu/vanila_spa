export default function homePage(nextDOMTree, parentNodeKey, isRender = true, navigate) {
  const childNodeKey = 'Home';
  
  if (!nextDOMTree[parentNodeKey]) {
    nextDOMTree[parentNodeKey] = [];
  }
  nextDOMTree[parentNodeKey].push(childNodeKey);
  
  if (isRender) {
    const parentElement = document.querySelector(`[data-render-key="${parentNodeKey}"]`) || document.getElementById('root');
    
    const homeDiv = document.createElement('div');
    homeDiv.dataset.renderKey = childNodeKey;
    
    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'APage';
    aboutBtn.onclick = () => navigate('/A');
    
    homeDiv.innerHTML = `
      <h1>홈 페이지</h1>
      <p>바닐라 SPA 라우터 시스템에 오신 것을 환영합니다!</p>
    `;
    homeDiv.appendChild(aboutBtn);

    parentElement.appendChild(homeDiv);
  }
}
