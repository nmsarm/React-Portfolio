const Footer = () =>{
    
    // internal css
    // const footerStyle = {
    //     position: "relative",
    //     width: "100%",
    //     bottom: "0"          
    // }

    const footerCopyright = {
        backgroundColor: "#212121",
        fontWeight: "200"
    }

    return(
        <>
            <footer className="bg-white text-center text-white">
                <div className="container p-4 pb-0">
                    {/* <h5 className="text-dark">Daneah Sarmiento</h5>
                    <p className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel eros blandit sem efficitur venenatis eu id urna.
                    </p> */}
                    <section className="mb-4">
                        <a className="socmed-btn btn btn-outline-dark btn-floating px-3" href="mailto:daneahsarmiento@gmail.com?"  target="__blank" role="button"
                            ><i className="fa fa-envelope"></i
                        ></a>
                        <a className="socmed-btn btn btn-outline-dark btn-floating px-3" href="https://www.linkedin.com/in/daneahsarmiento/"  target="__blank" role="button"
                            ><i className="fa fa-linkedin"></i
                        ></a> 
                        <a className="socmed-btn btn btn-outline-dark btn-floating px-3" href="https://github.com/nmsarm"  target="__blank" role="button"
                            ><i className="fa fa-github"></i
                        ></a>
                    </section>
                </div>

                <div className="footer-copyright text-center p-3 text-white" style={footerCopyright}> 
                    Copyright © 2022 Daneah Sarmiento
                </div>
            </footer>
        </>
    )
}

export default Footer


