const MainBanner = () => {
    return (
        <section className="main-banner">
            <img
                src="img/banner.svg"
                alt="баннер"
            />
            <div className="main-banner__wrapper">
                <h2>
                    NINJA SUSHI <br /> в Новосибирске! Пока только на левом
                    берегу
                </h2>
                <p>Доставку делаем с 10:00 до 19:30</p>
                <button className="button">Перейти к меню</button>
            </div>
        </section>
    );
};

export default MainBanner;
