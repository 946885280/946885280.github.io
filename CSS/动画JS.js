 // 在适当的时机添加/移除类名来触发动画效果
 window.addEventListener('load', function () {
    var header = document.getElementById('header');
    var main = document.getElementById('content');
    var footer = document.getElementById('footer');

    // 淡入淡出效果
    header.classList.add('fade-in');
    main.classList.add('fade-in');
    footer.classList.add('fade-in');

    // 平移效果
    main.addEventListener('mouseenter', function () {
      this.classList.remove('slide-in');
      this.classList.add('slide-out');
    });

    main.addEventListener('mouseleave', function () {
      this.classList.remove('slide-out');
      this.classList.add('slide-in');
    });

    // 缩放效果
    footer.addEventListener('click', function () {
      this.classList.remove('scale-in');
      this.classList.add('scale-out');
    });

    footer.addEventListener('animationend', function () {
      this.classList.remove('scale-out');
      this.classList.add('scale-in');
    });
  });