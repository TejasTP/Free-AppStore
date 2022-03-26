function WindowsButtonId(id_name, background_color1 = 'rgba(0, 0, 0, 0.2)', background_color2 = 'rgba(0, 0, 0, 0)', leave_background = 'rgb(0, 0, 0)', border_color1 = 'rgba(0, 0, 0, 0.7)', border_color2 = 'rgba(0, 0, 0, 0.1)', border_brightness1 = '20%', border_brightness2 = '75%', border_brightness3 = '1', border_thickness = '1px'){
    b = document.getElementById(id_name)
    b.onmouseleave = (e) => {
      e.target.style.background = leave_background;
      e.target.style.borderImage = null;
    };

    b.addEventListener("mousemove", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , ${background_color1}, ${background_color2})`;
      e.target.style.borderImage = `radial-gradient(${border_brightness1} ${border_brightness2} at ${x}px ${y}px ,${border_color1},${border_color2} ) ${border_brightness3} / ${border_thickness} / 0px stretch `;
});
}

function WindowsButtonClass(class_name, background_color1 = 'rgba(0, 0, 0, 0.2)', background_color2 = 'rgba(0, 0, 0, 0)', leave_background = 'rgb(0, 0, 0)', border_color1 = 'rgba(0, 0, 0, 0.7)', border_color2 = 'rgba(0, 0, 0, 0.1)', border_brightness1 = '20%', border_brightness2 = '75%', border_brightness3 = '1', border_thickness = '1px'){
  document.querySelectorAll('.'+class_name).forEach((b) => {
    b.onmouseleave = (e) => {
      e.target.style.background = leave_background;
      e.target.style.borderImage = null;
    };
    b.addEventListener("mousemove", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , ${background_color1}, ${background_color2})`;
      e.target.style.borderImage = `radial-gradient(${border_brightness1} ${border_brightness2} at ${x}px ${y}px ,${border_color1},${border_color2} ) ${border_brightness3} / ${border_thickness} / 0px stretch `;
    })
});
}

WindowsButtonClass('object', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.15)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.1)', '20%', '75%', '1', '0px')