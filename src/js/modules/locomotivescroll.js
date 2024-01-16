// npm install locomotive-scroll

export function LocomotiveScroll() {
  
  if(document.querySelector('[data-scroll-container]')){
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      tablet: {
        breakpoint: 992,
      }
    });
  
    scroll.on('scroll', (args) => {
      if (typeof args.currentElements['intro'] === 'object') {
        let progress = args.currentElements['intro'].progress;
    
        $('.hero__bg').css({
          opacity: 1 - progress
        })
      }
    });
  };
}

