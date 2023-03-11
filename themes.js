$(() => {
  const selector = $('.selector'),
   main = $('main'),
   buttons = $('.buttons'),
   head = $('.head'),
   output = $('.output'),
   smallButtons = $('.small-buttons button'),
   reset = $('#reset'),
   del = $('#delete'),
   equals = $('#equals');

  $('[data-one]').on('click', () => {
    selector.css({
      'transform': 'translateX(0px)',
      'background': 'hsl(6, 63%, 50%)'
    });

    main.css('background', 'hsl(222, 26%, 31%)');

    buttons.css('background', 'hsl(223, 31%, 20%)');

    head.css('color', 'hsl(0, 0%, 100%)');

    output.css({
      'background': 'hsl(224, 36%, 15%)',
      'color': 'hsl(0, 0, 100%)'
    });

    smallButtons.css({
      'background': 'hsl(30, 25%, 89%)',
      'box-shadow': '0px 3px hsl(28, 16%, 65%)'
    });

    reset.css({
      'background': 'hsl(225, 21%, 49%)',
      'box-shadow': '0px 3px hsl(224, 28%, 35%)'
    });

    del.css({
      'background': 'hsl(225, 21%, 49%)',
      'box-shadow': '0px 3px hsl(224, 28%, 35%)'
    });

    equals.css({
      'background': 'hsl(6, 63%, 50%)',
      'box-shadow': '0px 3px hsl(6, 70%, 34%)'
    });

    smallButtons.not(del).css('color', 'hsl(221, 14%, 31%)');
  });

  $('[data-two]').on('click', () => {
    selector.css({
      'transform': 'translateX(18px)',
      'background': 'hsl(6, 63%, 50%)'
    });

    main.css('background', 'hsl(0, 0%, 90%)');

    buttons.css('background', 'hsl(0, 5%, 81%)');

    head.css('color', 'hsl(60, 10%, 19%)');

    output.css({
      'background': 'hsl(0, 0%, 93%)',
      'color': 'hsl(60, 10%, 19%)'
    });

    smallButtons.css({
      'background': 'hsl(45, 7%, 89%)',
      'box-shadow': '0px 3px hsl(35, 11%, 61%)'
    });

    reset.css({
      'background': 'hsl(185, 42%, 37%)',
      'box-shadow': '0px 3px hsl(185, 58%, 25%)'
    });

    del.css({
      'background': 'hsl(185, 42%, 37%)',
      'box-shadow': '0px 3px hsl(185, 58%, 25%)'
    });

    equals.css({
      'background': 'hsl(25, 98%, 40%)',
      'box-shadow': '0px 3px hsl(25, 99%, 27%)'
    });


    smallButtons.not(del).css('color', 'hsl(60, 10%, 19%)');
  });

  $('[data-three]').on('click', () => {

    selector.css({
      'transform': 'translateX(35px)',
      'background': 'hsl(176, 100%, 44%)'
    });

    main.css('background', 'hsl(268, 75%, 9%)');

    buttons.css('background', 'hsl(268, 71%, 12%)');

    head.css('color', 'hsl(52, 100%, 62%)');

    output.css({
      'background': 'hsl(268, 71%, 12%)',
      'color': 'hsl(52, 100%, 62%)'
    });

    smallButtons.css({
      'background': 'hsl(268, 47%, 21%)',
      'box-shadow': '0px 3px hsl(290, 70%, 36%)'
    });

    smallButtons.not(del).css('color', 'hsl(52, 100%, 62%)');

    reset.css({
      'background': 'hsl(281, 89%, 26%)',
      'box-shadow': '0px 3px hsl(285, 91%, 52%)',
      'color': 'hsl(0, 0, 100%)'
    });

    del.css({
      'background': 'hsl(281, 89%, 26%)',
      'box-shadow': '0px 3px hsl(285, 91%, 52%)',
      'color': 'hsl(0, 0, 100%)'
    });

    equals.css({
      'background': 'hsl(176, 100%, 44%)',
      'box-shadow': '0px 3px hsl(177, 92%, 70%)'
    });

  });

});
