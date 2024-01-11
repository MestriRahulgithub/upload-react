import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="/">
                        <img src="https://th.bing.com/th/id/OIP.zwalP_T1IxAKaYCBUwVPEAHaFj?w=272&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" height="50" />

                        <h4 style={{ fontStyle: 'italic', color: 'white' }}>Your Child Interseted Movies</h4>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex justify-content-center w-100">
                            <ul className="navbar-nav ml-auto mr-20">
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'white' }} href="/" onMouseOver={(e) => e.target.style.color = 'green'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'white' }} href="/about" onMouseOver={(e) => e.target.style.color = 'green'} onMouseOut={(e) => e.target.style.color = 'white'}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'white' }} href="/Movies" onMouseOver={(e) => e.target.style.color = 'green'} onMouseOut={(e) => e.target.style.color = 'white'}>Movies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>




            <div class="row row-cols-1 row-cols-md-4 g-4" style={{ padding: 30, margin: 10 }}>
                <div class="col">
                    <div class="card" style={{ border: '2px solid black' }}>
                        <img src="https://th.bing.com/th/id/OIP.tbWhXtgdOc85vjecjo_jqQAAAA?w=202&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." style={{ border: ' solid orange' }} />
                        <div class="card-body">
                            <h4 class="card-title"><span style={{ color: 'brown' }}>PIRATES OF CARIBBEAN</span></h4>
                            <p class="card-text">Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer
                                and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ border: '2px solid black' }}>
                        <img src="https://th.bing.com/th/id/R.9c5ac34933cacd827956c2fe71239b94?rik=3aeJyic1um%2fppw&riu=http%3a%2f%2f4.bp.blogspot.com%2f_gWQaU40PH24%2fTQbPk5rXSII%2fAAAAAAAAJ6o%2fmqsPdVO07ZE%2fs1600%2fPirates-of-the-Caribbean-4.jpg&ehk=qs2xgJPKllZ7MshmK%2fapTY%2fSDM74L0Shzi%2ftXHy%2btR4%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 class="card-title"><span style={{ color: 'Turquoise' }}>AS ISLAND ROSE</span></h2>
                            <p class="card-text">I watched the 4th installment of the Pirates of the Caribbean movies and I must say it was different or
                                the movie had a different feel to it. The basic plot is that everyone is after the Fountain of Youth, pirates, The British,
                                as well as the Spaniards! And word is getting around that Captain Jack Sparrow</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ border: '2px solid black' }}>
                        <img src="https://images.everyeye.it/img-notizie/quanto-incassato-saga-harry-potter-scopriamo-numeri-film-v3-478869.jpg" class="card-img-top" alt="..." style={{ height: '245px' }} />
                        <div class="card-body">
                            <h2 class="card-title"><span style={{ color: 'green' }}>HARRY POTTER</span></h2>
                            <p class="card-text">Harry Potter and the Philosopher's Stone (also known as Harry Potter and the Sorcerer's Stone)
                                is a 2001 fantasy film directed by Chris Columbus and produced by David Heyman, from a screenplay by Steve Kloves,
                                based on the 1997 novel of the same name by J. K. Rowling.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{ border: '2px solid black' }}>
                        <img src="https://th.bing.com/th/id/OIP.Nw8jcZhuHz9CbhBwJGiEmQHaD5?w=329&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." style={{ height: '245px' }} />
                        <div class="card-body">
                            <h2 class="card-title"><span style={{ color: 'darkslateblue' }}>HARRY POTTER FINAL</span></h2>
                            <p class="card-text">Harry Potter and the Deathly Hallows Part 2 is a 2011 fantasy film directed by David Yates from a screenplay by Steve Kloves.
                                The film is the second of two cinematic parts based on the 2007 novel Harry Potter and the Deathly Hallows by J. K. Rowling.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
