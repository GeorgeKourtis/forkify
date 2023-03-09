import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _searchResults = document.querySelector('.search-results');
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';
  _button;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }

  _addToggleButton() {
    if (window.screen.width < 980) {
      const html = `<button class="toggle-results">
      <span></span>
      <span></span>
      <span></span>
      </span></button>`;
      this._searchResults.insertAdjacentHTML('afterbegin', html);
      this._button = document.querySelector('.toggle-results');
      this._searchResults.classList.add('closed');
    }

    this._button.addEventListener('click', this._toggleButton.bind(this));
    console.log(this);
  }

  _toggleButton() {
    if (this._searchResults.classList.contains('closed')) {
      this._searchResults.classList.remove('closed');
      this._searchResults.style.transform = 'translateX(0)';
    } else {
      this._searchResults.style.transform = 'translateX(-100%)';
      this._searchResults.classList.add('closed');
    }
  }
}

export default new ResultsView();
