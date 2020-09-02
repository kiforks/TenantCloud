function selectInit(container, selectOptionItem, selectClass, modifier) {
  $(`.${container}`).each(function() {
    const _this = $(this),
      selectOption = _this.find(`.${selectOptionItem}`),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 300; // длительность анимации

    _this.hide();
    if(modifier) {
      _this.wrap(`<div class="${selectClass}__select-container ${selectClass}__select-container--${modifier}"></div>`);
    } else {
      _this.wrap(`<div class="${selectClass}__select-container"></div>`);
    }

    if(modifier) {
      $('<div>', {
        class: `${selectClass}__new-select ${selectClass}__new-select--${modifier}`,
        html: _this.children(`.${selectOptionItem}--disabled`).html()
      }).insertAfter(_this);
    } else {
      $('<div>', {
        class: `${selectClass}__new-select`,
        html: _this.children(`.${selectOptionItem}--disabled`).html()
      }).insertAfter(_this);
    }

    const selectHead = _this.next(`.${selectClass}__new-select`);
    if(modifier) {
      $('<ul>', {
        class: `${selectClass}__select-list ${selectClass}__select-list--${modifier}`
      }).insertAfter(selectHead);
    } else {
      $('<ul>', {
        class: `${selectClass}__select-list`
      }).insertAfter(selectHead);
    }

    const selectList = selectHead.next(`.${selectClass}__select-list`);
    for (let i = 1; i < selectOptionLength; i++) {
      if(modifier) {
        $('<li>', {
          class: `${selectClass}__select-item ${selectClass}__select-item--${modifier}`,
          html: $('<span>', {
            html: selectOption.eq(i).html()
          })
        })
          .attr('data-value', selectOption.eq(i).val())
          .appendTo(selectList);
      } else {
        $('<li>', {
          class: `${selectClass}__select-item`,
          html: $('<span>', {
            html: selectOption.eq(i).html()
          })
        })
          .attr('data-value', selectOption.eq(i).val())
          .appendTo(selectList);
      }
    }

    const selectItem = selectList.find(`.${selectClass}__select-item`);
    selectList.slideUp(0);
    selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function() {
          let chooseItem = $(this).data('value');

          $(`${container}`).val(chooseItem).attr('selected', 'selected');
          selectHead.html( $(this).find('span').html() );

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });
}
