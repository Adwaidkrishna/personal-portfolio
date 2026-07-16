function Hero({ name, role,about }) {
    return (
        <section className="container mt-5">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <h1>Hello, I'm {name}</h1>
                    <h3>{role}</h3>
                    <p>{about}</p>
                </div>

                <div className="col-lg-6 text-center">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQ
                        sJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nz
                        c3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA7EAABAwIEAwUHAwMCBwAAAAABAAIDB
                        BEFEiExBkFREyJhcZEUMkJSgaHRI7HBFeHwYqIlM3KCktLx/8QAGgEAAQUBAAAAAAAAAAAAAAAABAABAgMFBv/EADARAAICAgAEBAQFBQEAAAAA
                        AAABAgMEEQUSITETQVFhIjJxgSMkM0KxBjSRwfAU/9oADAMBAAIRAxEAPwD0pCEKBUC7gbmnYPFcJ+iF5r9G3/hIdLbKDGIzFWyNtZpOYHrdVz1
                        p+I6XtaQTsGsXvf8ATzWYK5POo8K1+51mFYrKl7A3ZR6sqQNlErntaLuOgQiTb0g2L0xhg1Cn0+wWbkxyngLmyMlcdTdo/f8Aso8XGkcZIkopGg
                        bZnAF3kilhXy/aU2ZdK6bNuNk05Zan46pJI80lJPAL8yHW9FoKOtpq+mbUUkrZI3cwdRbqOqhZj21/Miuu2E38LHHqRw+/JiZYdpInD0IP5UZ2t
                        kuGv7PFKdx5vy+uifEly3xfuTyYc+PNexrCLIR08kLsEcWIhCEhCISoSECEITDgpVCPfd4AKKp1EP0M3UlMTguo86xGUi4OluqxWJ0hoqySG/cO
                        sZ6g7fhbQqn4ko/aKPt2D9WA5r9W8/z9EBxDH8Wra7o1MK/wrdPszF4zisOE0bp5Rmdsxl9yvO67GqmunMs7swtoLZWj0UrjavfX4yKZmVsNJ3L
                        nkfiJ/wA5Kgb3n5YgZXHnt9lVg4ca61KS6stzMmUpuEexMbKX3ILg4a5TcNH1HJJJUxR6HNI87Bt3f7iEx2FW8DKxzuoITctLWX1p5X/6YwWjz5
                        rQWvUB2/JHeeeQuLniGM7gSEFw6FoKWmxabDagT0VQ6N/O5zB3mPyuKfBcUqiQynkAHUKe3g/EjHmMbttByTS8NrTHjz72jWcJcTy4s59NWholA
                        HZvuBnPS3kFo8/Zysk+Rwd6FeQRUtVhlcxssT45gbtNwL+IXqtLO2uw+GoZtLHc+HX7rDzseNU1ZDsbeDkO2LhPub46m/I7ITFHJ21HBKd3RtP2
                        Ty6GD3FM5eceWTQIQhSIAhCEhAhCEw4KxgGWnjA6XVdbpurO1gB4BIsr7iEpC4XDSAQTY32Q5cxjNIL9UzLj5nrYpKjEq6OmDiX1UobfpnNvstt
                        wnwzDTU7XVJD53+84clW4dRj+t4rIYxb22cAfKO0IAH0Wvom9lCCAGm9yEHfZ+1BdMf3Ms6TB6Jr7ujZfxF1PFDRAD9MG3K2iiUZkfY6i6nuheG
                        XBuh9sv7i9jS5fcAPM7KDV5CO6GgDonJIpHNNr3UCsZJGNjr4KL6jpIynG+FxVdA6RgtNH34z4hNcDSSS4TNnPcEvdB8QCVNxB75M7CDcbAprha
                        n9npKtuWx9ov/tb+VXkv8u0y7Fj+ZTR6Dgb8+GRf6S5v3U9U/DMmaknZzZJf6Ef2KuFp4c+eiL9jGzocmRNe4IQhEggIQhIQIQlTDnULc0jR1Kn
                        uNyodKP1gTyBKlpF1fYRybfPHTZXSvDczgG35noF2Vk+OIpqmSjbHfLGS5pB2d19AoWS5Y7CKoc89MyNFA1mLV+Vp71ZM4AnYF7k1itZiAnLKWc
                        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"
                        alt="Profile"
                        className="img-fluid rounded-circle"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;