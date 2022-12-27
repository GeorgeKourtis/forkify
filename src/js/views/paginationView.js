import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkupButton(direction, currentPage) {
    return `
    <button data-goto="${
      direction === 'next' ? currentPage + 1 : currentPage - 1
    }"class="btn--inline pagination__btn--${direction}">
        <span>${direction === 'next' ? currentPage + 1 : currentPage - 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${
      direction === 'next' ? 'right' : 'left'
    }"></use>
        </svg>
    </button>
  `;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      confirm;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1 , and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next', currentPage);
    }
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev', currentPage);
    }
    // Other page
    if (currentPage < numPages) {
      return `${this._generateMarkupButton(
        'next',
        currentPage
      )}${this._generateMarkupButton('prev', currentPage)}`;
    }
    // page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
