const Footer = () =>{
    
    // internal css
    const footerStyle = {
        position: "relative",
        width: "100%",
        bottom: "0"          
    }

    return(
        <>
        <footer class="bg-dark text-center text-white">
            <div class="container p-4 pb-0">
                <section class="mb-4">
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fa fa-facebook-f"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fa fa-twitter"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fa fa-google"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fa fa-instagram"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fa fa-linkedin"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fa fa-github"></i
                ></a>
                </section>
            </div>

            <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}> 
                © 2022 Copyright: Daneah Sarmiento
            </div>
        </footer>
        </>
    )
}

export default Footer


