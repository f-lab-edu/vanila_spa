
export default function APage(nextDOMTree, parentNodeKey, isRender = true, navigate) {
  const childNodeKey = 'A';
  
  if (!nextDOMTree[parentNodeKey]) {
    nextDOMTree[parentNodeKey] = [];
  }
  nextDOMTree[parentNodeKey].push(childNodeKey);
  
  if (isRender) {
    const parentElement = document.querySelector(`[data-render-key="${parentNodeKey}"]`) || document.getElementById('root');
    
    const aDiv = document.createElement('div');
    aDiv.dataset.renderKey = childNodeKey;
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = '홈';
    homeBtn.onclick = () => navigate('/');
    
    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = '소개';
    aboutBtn.onclick = () => navigate('/about');
    
    aDiv.innerHTML = `
      <h1>A 페이지</h1>
      <p>A 페이지입니다!</p>
    `;
    
    aDiv.appendChild(homeBtn);
    
    parentElement.appendChild(aDiv);
  }
}
