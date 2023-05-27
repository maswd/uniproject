

function Home() {
  return (
    <div className="row  p-4 pb-0 ps-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-4 text-end  -offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img
          className="rounded-lg-3"
          src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png"
          alt=""
          width="720"
        />
      </div>
      <div className="text-end col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
          قهرمان مرزی با تصویر و سایه های برش خورده
        </h1>
        <p className="lead">
          طراحی و سفارشی‌سازی سریع سایت‌های پاسخ‌گوی اولین تلفن همراه با بوت
          استرپ، محبوب‌ترین جعبه ابزار منبع باز جلویی جهان، دارای متغیرهای و
          میکس‌ها، سیستم شبکه واکنش‌گرا، اجزای از پیش ساخته شده گسترده، و
          افزونه‌های قدرتمند جاوا اسکریپت
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button
            type="button"
            className="btn btn-info px-4 me-md-2 fw-bold"
          >
            Primary
          </button>
          <button type="button" className="btn btn-outline-secondary  px-4">
            Default
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
