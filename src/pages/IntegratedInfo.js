import React,{ useState } from 'react'
import './../sass/IntegratedInfo.scss';

const IntegratedInfo = () => {

  return (
    <div className='inter-wrap'>
      <div className='left-side-sch'>
        <span>검색</span>
        <div className='tab-wrap'>
          <div className='tab-title'>간편검색</div>
          <div className='tab-title on'>그룹조회</div>
        </div>
        {/*  <span className='sales-sch'>영업본부 검색</span>
        <div className='select-sch on'><p>본부전체</p><span>▽</span></div>
        <div className='select-sch'><p>지점전체</p><span>▽</span></div>
        <div className='select-sch'><p>GA전체</p><span>▽</span></div>
        <div className='direct-wrap'>
          <span className='direct-sch'>직접검색</span>
          <input type="text" placeholder='영업부, 지점, GA명 입력' className='direct-input'></input>
          <button>검색</button>
        </div> */}
        <span className='direct-sch'>직접검색</span>
        <div className='total-sch-wrap'>
          <div className='total-sch'><p>전체</p><span>▽</span></div>
          <div className='total-sch'><p>검색어 입력</p></div>
        </div>
        <button>검색</button>
        <div className='accordion-menu'>
          <div className='img-wrap'>
            <span className='total-view'>전체보기</span><img width={20} src="https://static.thenounproject.com/png/16957-200.png" />
          </div>
          <div className='img-sub-wrap'>
            <span className='accordion-sub-menu'>영업부1</span><img width={20} src="https://static.thenounproject.com/png/16957-200.png" />
          </div>
          <ul>
          <div className='img-sub-wrap'>
            <span className='area-point-menu'>지점</span><img width={20} src="https://static.thenounproject.com/png/16957-200.png" />
          </div>
            <div className='li-wrap'>
              <li>GA1</li>
              <li>GA2</li>
              <li>GA3</li>
            </div>
          </ul>
          <div className='img-sub-wrap'>
            <span className='accordion-sub-menu'>영업부2</span><img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8BAAKRkZG7u7v7+/twcHDz8/OLi4y5ublGRkczMjP39/eOjo5EREW9vL1tbG0+Pj9kZGXd3d20tLQ5OTkvLzCamprp6emsrK2goKHm5uZ2dXbS0dIQDxBMTExZWVl+fn4nJicbGhxgYGHLy8v7W7uMAAAEoElEQVR4nO2d4VbiMBCFW6iAq4KCIiCi6/L+z7itNayRlmaSSWay536/E0/vmbmdmxahKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUibzzXa03Ywn0hcSh93tdWm4ny6lL4edm9vS5mUnfUm87F/LM7bSF8XJ6lxfzZX0ZfEx6hRYlof/5ZbTJ7As726kr42Faa/AsvxVSV8dA/0VbLjPv1EvCyzL69wlDgmsq5h3o17y4MmLOd9uhivYcJdvo7oJrL2YaxV/RtF+HvP0orvAWmKOVXRt0a9Gzc+LNIEZBjiXMWGTWYCjVrAhqwDnIzArL/oJzCjA0T1oyCTA+VawIYsAFyIwi6FBSTJdqA9woQLVB7iwFm1RPTQ4BNZe1Nuo/mPCRm2A46lgg9KhwSdQ6ak//C76HYVDg1egwqHB2aItyrzIL1BZgOMaEzaKhkaMCjaoOfXHEqgmwMUTqOTUH8eDBgWn/pgVbBAfGmSBb9QNwgGOnGQeijF1i2iAIwtsPkIzJ0uUqyK5RdvPCJGrKDY0yAIfvjbOqBuFAhx5TCxOW8lVFAlwni3qKVEgwJEFLqzt+r3o7UED2YuJAxzZg+eftCQPjaQBLsiDBnKjJgxwgR70l5iqiuQk0y3QQ2KiAOcV1bgkpqgiiwcN5NtNgqERPCZs6AEudqMGRLVutAU41hb1lBg1wDGNiUCJEU/9Hid6F/QEOMYxYUP3YpwqRvCggTw0ogQ45jFhoyHAsY+JQInsQyNii3pKZB4a0QVKn/qjetAgOTQYTvQuyA2NBC3qKZFpaESJakwSWQJcpKjGJJHh1B8tqnFJDK1iMg96SwwcGknGhE3a1zaRo1o3KQNc8hb1lOgd4BKOiUCJnl4U8KAhTYAT8aAhxWsbIQ8a4gc4MQ96SyQGOLaXLwklkgJc4qjGJdG9isIeNMR7bSM4JmxiBTjRMWFDHxouXlTSoi0xApz4mLDh96IaDxq4A1yip2oUeJ/AqfKggfO1jTIPGvhe2ygaE4ESe4aGiqjGJLFzaCht0RaOoaFuTNiEDw21HjSEelHlmAiUaA2NNXV36gp6STxU/nvTejD8MvfUnVJfHkuWOGr3VR3f8atSoIfE/ec26m1UpkX9JL41m5bETRI3GX+Jx3rPFW2L9Bc4EyXWRaxoO2Qr6CFxQkx8kh400ALcrHinLJevYAOpKC/FgbBa2oMGSqMeit/ui3VUsIEg8anIUSBJYvHkulJLi7Y4e/GjcP3/eF0C3at473ov1TAmbByHxh/HcmvyoMHtytdumUZbi7Y4NeqyKBbDqzRWsMGhih/1suPgKn0eNAx7cdosexhYpLNFW4aq+Pr5NGqXr8BBL67bVRcf52v1oOGixCfztO3C1Ncu8LLEZ7OoeuxbortFW/olHv8teu6R+C511ST6bjez74uqzmNiLr8btux8Hvrzx+vOnyl+HDv/nEYm53eSjt8D2/0IN2sNXwbnzNH22eO8c9V+ejosvm2fO5coZv5y0nc17q/OcrxZrzdz6W+B86Par7aj7eqYVfMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKOMvUXE/dr9hlyUAAAAASUVORK5CYII=" />
          </div>
          <div className='img-sub-wrap'>
            <span className='accordion-sub-menu'>영업부3</span><img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8BAAKRkZG7u7v7+/twcHDz8/OLi4y5ublGRkczMjP39/eOjo5EREW9vL1tbG0+Pj9kZGXd3d20tLQ5OTkvLzCamprp6emsrK2goKHm5uZ2dXbS0dIQDxBMTExZWVl+fn4nJicbGhxgYGHLy8v7W7uMAAAEoElEQVR4nO2d4VbiMBCFW6iAq4KCIiCi6/L+z7itNayRlmaSSWay536/E0/vmbmdmxahKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUibzzXa03Ywn0hcSh93tdWm4ny6lL4edm9vS5mUnfUm87F/LM7bSF8XJ6lxfzZX0ZfEx6hRYlof/5ZbTJ7As726kr42Faa/AsvxVSV8dA/0VbLjPv1EvCyzL69wlDgmsq5h3o17y4MmLOd9uhivYcJdvo7oJrL2YaxV/RtF+HvP0orvAWmKOVXRt0a9Gzc+LNIEZBjiXMWGTWYCjVrAhqwDnIzArL/oJzCjA0T1oyCTA+VawIYsAFyIwi6FBSTJdqA9woQLVB7iwFm1RPTQ4BNZe1Nuo/mPCRm2A46lgg9KhwSdQ6ak//C76HYVDg1egwqHB2aItyrzIL1BZgOMaEzaKhkaMCjaoOfXHEqgmwMUTqOTUH8eDBgWn/pgVbBAfGmSBb9QNwgGOnGQeijF1i2iAIwtsPkIzJ0uUqyK5RdvPCJGrKDY0yAIfvjbOqBuFAhx5TCxOW8lVFAlwni3qKVEgwJEFLqzt+r3o7UED2YuJAxzZg+eftCQPjaQBLsiDBnKjJgxwgR70l5iqiuQk0y3QQ2KiAOcV1bgkpqgiiwcN5NtNgqERPCZs6AEudqMGRLVutAU41hb1lBg1wDGNiUCJEU/9Hid6F/QEOMYxYUP3YpwqRvCggTw0ogQ45jFhoyHAsY+JQInsQyNii3pKZB4a0QVKn/qjetAgOTQYTvQuyA2NBC3qKZFpaESJakwSWQJcpKjGJJHh1B8tqnFJDK1iMg96SwwcGknGhE3a1zaRo1o3KQNc8hb1lOgd4BKOiUCJnl4U8KAhTYAT8aAhxWsbIQ8a4gc4MQ96SyQGOLaXLwklkgJc4qjGJdG9isIeNMR7bSM4JmxiBTjRMWFDHxouXlTSoi0xApz4mLDh96IaDxq4A1yip2oUeJ/AqfKggfO1jTIPGvhe2ygaE4ESe4aGiqjGJLFzaCht0RaOoaFuTNiEDw21HjSEelHlmAiUaA2NNXV36gp6STxU/nvTejD8MvfUnVJfHkuWOGr3VR3f8atSoIfE/ec26m1UpkX9JL41m5bETRI3GX+Jx3rPFW2L9Bc4EyXWRaxoO2Qr6CFxQkx8kh400ALcrHinLJevYAOpKC/FgbBa2oMGSqMeit/ui3VUsIEg8anIUSBJYvHkulJLi7Y4e/GjcP3/eF0C3at473ov1TAmbByHxh/HcmvyoMHtytdumUZbi7Y4NeqyKBbDqzRWsMGhih/1suPgKn0eNAx7cdosexhYpLNFW4aq+Pr5NGqXr8BBL67bVRcf52v1oOGixCfztO3C1Ncu8LLEZ7OoeuxbortFW/olHv8teu6R+C511ST6bjez74uqzmNiLr8btux8Hvrzx+vOnyl+HDv/nEYm53eSjt8D2/0IN2sNXwbnzNH22eO8c9V+ejosvm2fO5coZv5y0nc17q/OcrxZrzdz6W+B86Par7aj7eqYVfMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKOMvUXE/dr9hlyUAAAAASUVORK5CYII=" />
          </div>
          <div className='img-sub-wrap'>
            <span className='accordion-sub-menu'>영업부4</span><img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8BAAKRkZG7u7v7+/twcHDz8/OLi4y5ublGRkczMjP39/eOjo5EREW9vL1tbG0+Pj9kZGXd3d20tLQ5OTkvLzCamprp6emsrK2goKHm5uZ2dXbS0dIQDxBMTExZWVl+fn4nJicbGhxgYGHLy8v7W7uMAAAEoElEQVR4nO2d4VbiMBCFW6iAq4KCIiCi6/L+z7itNayRlmaSSWay536/E0/vmbmdmxahKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUibzzXa03Ywn0hcSh93tdWm4ny6lL4edm9vS5mUnfUm87F/LM7bSF8XJ6lxfzZX0ZfEx6hRYlof/5ZbTJ7As726kr42Faa/AsvxVSV8dA/0VbLjPv1EvCyzL69wlDgmsq5h3o17y4MmLOd9uhivYcJdvo7oJrL2YaxV/RtF+HvP0orvAWmKOVXRt0a9Gzc+LNIEZBjiXMWGTWYCjVrAhqwDnIzArL/oJzCjA0T1oyCTA+VawIYsAFyIwi6FBSTJdqA9woQLVB7iwFm1RPTQ4BNZe1Nuo/mPCRm2A46lgg9KhwSdQ6ak//C76HYVDg1egwqHB2aItyrzIL1BZgOMaEzaKhkaMCjaoOfXHEqgmwMUTqOTUH8eDBgWn/pgVbBAfGmSBb9QNwgGOnGQeijF1i2iAIwtsPkIzJ0uUqyK5RdvPCJGrKDY0yAIfvjbOqBuFAhx5TCxOW8lVFAlwni3qKVEgwJEFLqzt+r3o7UED2YuJAxzZg+eftCQPjaQBLsiDBnKjJgxwgR70l5iqiuQk0y3QQ2KiAOcV1bgkpqgiiwcN5NtNgqERPCZs6AEudqMGRLVutAU41hb1lBg1wDGNiUCJEU/9Hid6F/QEOMYxYUP3YpwqRvCggTw0ogQ45jFhoyHAsY+JQInsQyNii3pKZB4a0QVKn/qjetAgOTQYTvQuyA2NBC3qKZFpaESJakwSWQJcpKjGJJHh1B8tqnFJDK1iMg96SwwcGknGhE3a1zaRo1o3KQNc8hb1lOgd4BKOiUCJnl4U8KAhTYAT8aAhxWsbIQ8a4gc4MQ96SyQGOLaXLwklkgJc4qjGJdG9isIeNMR7bSM4JmxiBTjRMWFDHxouXlTSoi0xApz4mLDh96IaDxq4A1yip2oUeJ/AqfKggfO1jTIPGvhe2ygaE4ESe4aGiqjGJLFzaCht0RaOoaFuTNiEDw21HjSEelHlmAiUaA2NNXV36gp6STxU/nvTejD8MvfUnVJfHkuWOGr3VR3f8atSoIfE/ec26m1UpkX9JL41m5bETRI3GX+Jx3rPFW2L9Bc4EyXWRaxoO2Qr6CFxQkx8kh400ALcrHinLJevYAOpKC/FgbBa2oMGSqMeit/ui3VUsIEg8anIUSBJYvHkulJLi7Y4e/GjcP3/eF0C3at473ov1TAmbByHxh/HcmvyoMHtytdumUZbi7Y4NeqyKBbDqzRWsMGhih/1suPgKn0eNAx7cdosexhYpLNFW4aq+Pr5NGqXr8BBL67bVRcf52v1oOGixCfztO3C1Ncu8LLEZ7OoeuxbortFW/olHv8teu6R+C511ST6bjez74uqzmNiLr8btux8Hvrzx+vOnyl+HDv/nEYm53eSjt8D2/0IN2sNXwbnzNH22eO8c9V+ejosvm2fO5coZv5y0nc17q/OcrxZrzdz6W+B86Par7aj7eqYVfMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKOMvUXE/dr9hlyUAAAAASUVORK5CYII=" />
          </div>
          <div className='img-sub-wrap'>
            <span className='accordion-sub-menu'>영업부5</span><img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8BAAKRkZG7u7v7+/twcHDz8/OLi4y5ublGRkczMjP39/eOjo5EREW9vL1tbG0+Pj9kZGXd3d20tLQ5OTkvLzCamprp6emsrK2goKHm5uZ2dXbS0dIQDxBMTExZWVl+fn4nJicbGhxgYGHLy8v7W7uMAAAEoElEQVR4nO2d4VbiMBCFW6iAq4KCIiCi6/L+z7itNayRlmaSSWay536/E0/vmbmdmxahKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUibzzXa03Ywn0hcSh93tdWm4ny6lL4edm9vS5mUnfUm87F/LM7bSF8XJ6lxfzZX0ZfEx6hRYlof/5ZbTJ7As726kr42Faa/AsvxVSV8dA/0VbLjPv1EvCyzL69wlDgmsq5h3o17y4MmLOd9uhivYcJdvo7oJrL2YaxV/RtF+HvP0orvAWmKOVXRt0a9Gzc+LNIEZBjiXMWGTWYCjVrAhqwDnIzArL/oJzCjA0T1oyCTA+VawIYsAFyIwi6FBSTJdqA9woQLVB7iwFm1RPTQ4BNZe1Nuo/mPCRm2A46lgg9KhwSdQ6ak//C76HYVDg1egwqHB2aItyrzIL1BZgOMaEzaKhkaMCjaoOfXHEqgmwMUTqOTUH8eDBgWn/pgVbBAfGmSBb9QNwgGOnGQeijF1i2iAIwtsPkIzJ0uUqyK5RdvPCJGrKDY0yAIfvjbOqBuFAhx5TCxOW8lVFAlwni3qKVEgwJEFLqzt+r3o7UED2YuJAxzZg+eftCQPjaQBLsiDBnKjJgxwgR70l5iqiuQk0y3QQ2KiAOcV1bgkpqgiiwcN5NtNgqERPCZs6AEudqMGRLVutAU41hb1lBg1wDGNiUCJEU/9Hid6F/QEOMYxYUP3YpwqRvCggTw0ogQ45jFhoyHAsY+JQInsQyNii3pKZB4a0QVKn/qjetAgOTQYTvQuyA2NBC3qKZFpaESJakwSWQJcpKjGJJHh1B8tqnFJDK1iMg96SwwcGknGhE3a1zaRo1o3KQNc8hb1lOgd4BKOiUCJnl4U8KAhTYAT8aAhxWsbIQ8a4gc4MQ96SyQGOLaXLwklkgJc4qjGJdG9isIeNMR7bSM4JmxiBTjRMWFDHxouXlTSoi0xApz4mLDh96IaDxq4A1yip2oUeJ/AqfKggfO1jTIPGvhe2ygaE4ESe4aGiqjGJLFzaCht0RaOoaFuTNiEDw21HjSEelHlmAiUaA2NNXV36gp6STxU/nvTejD8MvfUnVJfHkuWOGr3VR3f8atSoIfE/ec26m1UpkX9JL41m5bETRI3GX+Jx3rPFW2L9Bc4EyXWRaxoO2Qr6CFxQkx8kh400ALcrHinLJevYAOpKC/FgbBa2oMGSqMeit/ui3VUsIEg8anIUSBJYvHkulJLi7Y4e/GjcP3/eF0C3at473ov1TAmbByHxh/HcmvyoMHtytdumUZbi7Y4NeqyKBbDqzRWsMGhih/1suPgKn0eNAx7cdosexhYpLNFW4aq+Pr5NGqXr8BBL67bVRcf52v1oOGixCfztO3C1Ncu8LLEZ7OoeuxbortFW/olHv8teu6R+C511ST6bjez74uqzmNiLr8btux8Hvrzx+vOnyl+HDv/nEYm53eSjt8D2/0IN2sNXwbnzNH22eO8c9V+ejosvm2fO5coZv5y0nc17q/OcrxZrzdz6W+B86Par7aj7eqYVfMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKOMvUXE/dr9hlyUAAAAASUVORK5CYII=" />
          </div>
          <div className='img-sub-wrap'>
            <span className='accordion-sub-menu'>영업부6</span><img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8BAAKRkZG7u7v7+/twcHDz8/OLi4y5ublGRkczMjP39/eOjo5EREW9vL1tbG0+Pj9kZGXd3d20tLQ5OTkvLzCamprp6emsrK2goKHm5uZ2dXbS0dIQDxBMTExZWVl+fn4nJicbGhxgYGHLy8v7W7uMAAAEoElEQVR4nO2d4VbiMBCFW6iAq4KCIiCi6/L+z7itNayRlmaSSWay536/E0/vmbmdmxahKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUibzzXa03Ywn0hcSh93tdWm4ny6lL4edm9vS5mUnfUm87F/LM7bSF8XJ6lxfzZX0ZfEx6hRYlof/5ZbTJ7As726kr42Faa/AsvxVSV8dA/0VbLjPv1EvCyzL69wlDgmsq5h3o17y4MmLOd9uhivYcJdvo7oJrL2YaxV/RtF+HvP0orvAWmKOVXRt0a9Gzc+LNIEZBjiXMWGTWYCjVrAhqwDnIzArL/oJzCjA0T1oyCTA+VawIYsAFyIwi6FBSTJdqA9woQLVB7iwFm1RPTQ4BNZe1Nuo/mPCRm2A46lgg9KhwSdQ6ak//C76HYVDg1egwqHB2aItyrzIL1BZgOMaEzaKhkaMCjaoOfXHEqgmwMUTqOTUH8eDBgWn/pgVbBAfGmSBb9QNwgGOnGQeijF1i2iAIwtsPkIzJ0uUqyK5RdvPCJGrKDY0yAIfvjbOqBuFAhx5TCxOW8lVFAlwni3qKVEgwJEFLqzt+r3o7UED2YuJAxzZg+eftCQPjaQBLsiDBnKjJgxwgR70l5iqiuQk0y3QQ2KiAOcV1bgkpqgiiwcN5NtNgqERPCZs6AEudqMGRLVutAU41hb1lBg1wDGNiUCJEU/9Hid6F/QEOMYxYUP3YpwqRvCggTw0ogQ45jFhoyHAsY+JQInsQyNii3pKZB4a0QVKn/qjetAgOTQYTvQuyA2NBC3qKZFpaESJakwSWQJcpKjGJJHh1B8tqnFJDK1iMg96SwwcGknGhE3a1zaRo1o3KQNc8hb1lOgd4BKOiUCJnl4U8KAhTYAT8aAhxWsbIQ8a4gc4MQ96SyQGOLaXLwklkgJc4qjGJdG9isIeNMR7bSM4JmxiBTjRMWFDHxouXlTSoi0xApz4mLDh96IaDxq4A1yip2oUeJ/AqfKggfO1jTIPGvhe2ygaE4ESe4aGiqjGJLFzaCht0RaOoaFuTNiEDw21HjSEelHlmAiUaA2NNXV36gp6STxU/nvTejD8MvfUnVJfHkuWOGr3VR3f8atSoIfE/ec26m1UpkX9JL41m5bETRI3GX+Jx3rPFW2L9Bc4EyXWRaxoO2Qr6CFxQkx8kh400ALcrHinLJevYAOpKC/FgbBa2oMGSqMeit/ui3VUsIEg8anIUSBJYvHkulJLi7Y4e/GjcP3/eF0C3at473ov1TAmbByHxh/HcmvyoMHtytdumUZbi7Y4NeqyKBbDqzRWsMGhih/1suPgKn0eNAx7cdosexhYpLNFW4aq+Pr5NGqXr8BBL67bVRcf52v1oOGixCfztO3C1Ncu8LLEZ7OoeuxbortFW/olHv8teu6R+C511ST6bjez74uqzmNiLr8btux8Hvrzx+vOnyl+HDv/nEYm53eSjt8D2/0IN2sNXwbnzNH22eO8c9V+ejosvm2fO5coZv5y0nc17q/OcrxZrzdz6W+B86Par7aj7eqYVfMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKOMvUXE/dr9hlyUAAAAASUVORK5CYII=" />
          </div>
        </div>
      </div>
      <div className='right-content'>
        <span>GA 정보 목록</span>
        <span className='cnt-sch-result'>전체 100건</span>
        <div className='sch-result-data'>여기에 데이터 라이브러리 써서 그릴거임</div>
      </div>
    </div>
  )
}
export default IntegratedInfo