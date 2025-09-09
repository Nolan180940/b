// 真实时钟（秒针、分针、时针都实时计算）
function updateTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // 计算角度
  const secondAngle = seconds * 6;           // 每秒6度
  const minuteAngle = minutes * 6 + seconds * 0.1; // 每分钟6度，每秒0.1度
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 每小时30度，每分钟0.5度

  // 更新CSS变量或直接修改transform
  const clock = document.querySelector('.clock');
  const secondHand = clock.querySelector('::before');
  const minuteHand = clock.querySelector('::after');

  // 使用JS动态设置transform（更精确）
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;

  // 更新文本时间
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const weekday = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  document.getElementById('date').textContent = `${year}年 ${month}月 ${day}日 星期${weekday}`;
  document.getElementById('time').textContent = `${h}:${m}:${s}`;
}

// 每秒更新一次
setInterval(updateTime, 1000);
updateTime(); // 初始化