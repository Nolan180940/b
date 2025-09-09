function updateTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // 计算角度
  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  // 更新数字时间
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const weekday = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  document.getElementById('date').textContent = `${year}年 ${month}月 ${day}日 星期${weekday}`;
  document.getElementById('time').textContent = `${h}:${m}:${s}`;

  // 更新指针（使用伪元素）
  const clock = document.querySelector('.clock');
  clock.style.setProperty('--second-angle', secondAngle);
  clock.style.setProperty('--minute-angle', minuteAngle);
  clock.style.setProperty('--hour-angle', hourAngle);
}

setInterval(updateTime, 1000);
updateTime();