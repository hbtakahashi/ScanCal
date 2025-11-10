import './style.scss'

const appHtml = `
  <div class="input-section">
    <h2>撮影</h2>
    <input type="file" accept="image/*" capture="environment" id="cameraInput">
    <button id="scanButton">画像をスキャンしてデータを抽出</button>
  </div>
  
  <section id="results-area">
    <h2>抽出結果</h2>
    <p>撮影した画像からテキストを抽出した結果がここに表示されます。</p>
    </section>
`;
document.querySelector('#app').innerHTML = appHtml;

const cameraInput = document.querySelector('#cameraInput'); // input type="file"
const scanButton = document.querySelector('#scanButton');   // スキャンボタン

cameraInput.addEventListener('change', handleImageSelection);
scanButton.addEventListener('click', () => {
  // 実際には scanButton を押しても cameraInput をクリックしたのと同じ動作にしたいので
  cameraInput.click();
});