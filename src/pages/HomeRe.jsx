const Home = () => {  
    const controls = useAnimation();
  
    useEffect(() => {
      controls.start({
        y: [0, -1000],
        transition: { duration: 20, repeat: Infinity, ease: "linear" }
      });
    }, [controls]);
  
    return (
     (
      <div className='select-none overflow-hidden  relative  box-border'>
        <div className='bg-deepBlue h-[30px] '></div>
        {/* navbar */}
        <nav className="bg-white ">
        <div className="relative box-border w-[1080px] mx-auto flex items-center justify-between ">
  
            {/* <!-- logo --> */}
            <a href="/" className="box-border cursor-pointer no-underline py-3 pr-7">
                <motion.img
                initial={{opacity:0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5,  ease:"easeIn"}}
                src={aeontech}
                width="200px"
                height="30px"/>
            </a>
  
            <ul className="flex space-x-6">
                <li className="text-white font-mullish py-2 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                <a className='no-underline text-black' href="#">Products</a>
  
                <div className="absolute  -bottom-[11px] w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
  
                <li className="text-white font-mullish py-2 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                <a className='no-underline text-black' href="/services">Services</a>
  
                <div className="absolute -bottom-[11px] w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
              </li>
  
  
                <li className="text-white font-mullish py-2 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                <a className='no-underline text-black' href="#">Solutions</a>
  
                <div className="absolute -bottom-[11px] w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
                
  
                <li className="text-white font-mullish py-2 hover:text-lightBlue cursor-pointer
                 transition-all duration-200 relative group hidden lg:block">
                <a className='no-underline text-black' href="#">Career</a>
  
                <div className="absolute -bottom-[11px] w-full h-1 bg-lightBlue hidden group-hover:block
                transition-all duration-200" ></div>
                </li>
            </ul>
  
            <div className="flex space-x-6">
  
                <button className="py-2 px-5 font-mullish text-white border-lightBlue border
                rounded-sm text-sm bg-lightBlue500  font-bold">Contact</button>
                <button className="py-3 px-3 font-mullish rounded-sm text-sm font-bold
                 bg-white text-lightBlue300 border-2 border-white transition-all duration-200
                hover:text-lightBlue500 hidden lg:flex items-center">About Us
                <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-[14px] h-[14px] ml-2"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg></button>
            </div>
  
  
        </div>
        </nav>
        
        {/* HERO */}
      <motion.section
     
    className="relative overflow-hidden  bg-deepBlue">
  
    <motion.div  className="w-10/12  max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto ">
        {/* <!--left part--> */}
        <motion.div initial="initial" animate="animate" variants={heroVariants} className="space-y-8">
            <motion.h1  className="font-mullish font-bold text-[40px] leading-[1.2] text-white">Welcome to AEONTECH LLP</motion.h1>
            <motion.div  className="hero-section-heading font-bold font-mullish text-lightBlue600 text-[35px] hero-section-sub-heading">
               <motion.span  className="role"><span>
                <Typewriter
                     words={["Future Ready Technology", "Smart Technology", "Your Digital Partner"]}
                     loop={false}
                     cursor
                     cursorStyle='|'
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}
               /></span>
            </motion.span>
          </motion.div>
  
            <div className="w-6 h-1 bg-greenLight"></div>
            <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
                System Integration and Service company commited to delivering the best-in-class IT solutions
            </p>
            <button
            className="bg-lightBlue text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
            hover:bg-lightBlue500 transition-all duration-200"
            >Contact Us Now</button>
        </motion.div>
        {/* <!--right part--> */}
        <img src={heroImg} alt=""
        className="w-full  max-w-[550px]"/>
    </motion.div>
  
    {/* <!--shape part--> */}
  
  
    </motion.section>
  
    <div class="w-[105%] relative  top-0   right-0">
        <img src={heroshape} alt=""
        class="w-full object-fill "/>
    </div>
                                                    {/* Services */}
    <section>
      <Suspense fallback={<Loader/>}><LazyServices/></Suspense>
  
                                                    {/* Solutions */}
    </section>
    <section
          class="feature-section-2B bg-no-repeat bg-cover pb-[500px] mt-14 pt-[10rem]">
       
          <div class="w-10/12 max-w-[1080px]  mx-auto relative pt-4 ">
  
            <h2 class="font-mullish text-center text-2xl leading-[1.2] text-white font-bold"
            >Explore our wide range of solutions</h2>
            <div class="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
  
  
            <div class="w-full min-h[440px] flex flex-col relative">
                <img src={flame1} alt=""
                loading="lazy"
                class="absolute -top-[142px] -left-[140px] w-[200px]"/>
                
                <img src={flame2} alt=""
                loading="lazy"
                class="absolute top-[150px] -right-[180px] w-[200px]"/>
  
               
              <Solution/>              
  
            </div>
  
          </div>
        </section>
                                                    {/* Responsibility */}
        <section className='bg-white w-10/12 mt-16 mx-auto relative'>
          <div className='relative w-full max-w-[1080px] mx-auto pt-4'>
            <img src={featureSectionDotted}  
              className='absolute w-[233px] left-[300px] -top-[6rem] -z-10'
            />
            <img src={featureSectionDotted} alt=""
              className="absolute w-[233px] right-[100px] -top-[10rem] z-10"/>
          </div>
          {/* our responsibility */}
          <div className='flex gap-x-6'>
            {/* image */}
            <div className='p-2 w-[48%]' >
              <img src={responsibility} />
  
            </div>
            {/* right part */}
            <div className='flex w-[48%] ml-14 pt-2 flex-col gap-y-3'>
              {/* heading */}
              <div className='flex flex-col gap-y-1 box-border'>
              <p className='text-deepBlueHead text-4xl font-mullish font-semibold'>OUR RESPONSIBILITY</p>
              <p className='text-grayBlue text-lg '>A Passion for Problem Solving</p>
              </div>
              {/* content */}
              <div className='flex flex-col gap-y-5'>
              <div className='text-base'>
              At AEONTECH NETWORKS LLP Processing - we relish the opportunity to implement ambitious projects in challenging environments. We fervently believe that by providing technologically advanced facilities which conform to stringent standards of efficiency and security - we can make a significant contribution to stabilization and development.
              </div>
  
              <div className='flex gap-x-6 mt-5'>
              <div className="w-14 h-1 bg-caribbeangreen-800"></div>
              {/* approach */}
              <div className='flex flex-col -m-2 text-lg '>
                 <ul>
                  <li>Determine where you're at</li>
                  <li>Discuss where you need to go</li>
                  <li>Recommend the best options to achieve your goals</li>
                  <li>Implement</li>
                 </ul>
              </div>
              </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* PARTNERS */}
        <section class="w-full 
    bg-no-repeat bg-cover bg-center mt-14 relative corefeaturesection">
        <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <h2 class="font-mullish font-bold text-3xl text-center text-white">Don't just take our word for it</h2>
            <div class="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
            <p
            class="font-mullish text-center text-lg max-w-[450px] text-white mx-auto"
            >Trusted Partnerships with Leading Industry Innovators</p>
  
            <div class=" h-[400px] text-white  mt-14">
              {/* partner container */}
                <div className='w-10/12 flex justify-between gap-x-8 mx-auto'>
                  {/* partner description */}
                  <div className='w-[60%] text-xl'>
                  AEONTECH NETWORKS LLP provides a comprehensive range of products and services from partners whom we have identified as being leaders in their area of technical expertise. Aeontech remains an independent consultant, and only recommends the best solution for each client's individual needs. We assess new technology as it becomes available, and only recommend products or services that we believe have a stable solution and will perform over the long-term.
                  </div>
                  {/* partners images */}
                  <div className="overflow-hidden w-[300px] h-[500px]">
                  <motion.div 
                    className="flex flex-col"
                    animate={controls}
                  >
                    {partners.concat(partners).map((src, index) => (
                      <div key={index} className="h-28 mb-2">
                        <img src={src} alt={`Slide ${index}`} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </motion.div>
                </div>
                </div>
                
                
                
                
                
                
  
            </div>
        </div>
    </section>
  
  {/* Products and Service */}
    <section className='bg-white w-10/12 mt-16 mx-auto relative'>
          <div className='relative w-full max-w-[1080px] mx-auto pt-4'>
            <img src={featureSectionDotted}  
              className='absolute w-[233px] left-[300px] -top-[6rem] -z-10'
            />
            <img src={featureSectionDotted} alt=""
              className="absolute w-[233px] right-[100px] -top-[10rem] -z-10"/>
          </div>
          <div className='flex gap-x-6'>
            
            {/* left part */}
            <div className='flex w-[48%] ml-14 pt-2 flex-col gap-y-3'>
              {/* heading */}
              <div className='flex flex-col gap-y-1 box-border'>
              <p className='text-deepBlueHead text-4xl font-mullish font-semibold'>PRODUCTS AND SERVICE</p>
              <p className='text-grayBlue text-lg '>Comprehensive Solutions for All Your Networking Needs</p>
              </div>
              {/* content */}
              <div className='flex flex-col gap-y-5'>
              <div className='text-base'>
              AEONTECH NETWORKS LLP through its consultancy provides Products and innovative services with a commitment to support your business and partners in every aspect of their IT operations - both today and in the future. Our experience in widely varying environments, coupled with our ability to anticipate market developments, form the solid basis on which we build productive and rewarding partnerships with our clients. You can be sure that our guidance is sound, and that our advised technology's are fast, efficient, secure and reliable. Offers a comprehensive and highly flexible service package that can be tailored precisely to your needs.
              </div>
  
           
  
              <div className='left-4 flex flex-col justify-start'>
                    <div className='flex'>
                    <FaCheck  className='text-yellow-50 right-0 w-16 mt-1'/>
                    <p>IT services cover every other aspect of IT provision and supply with further detials on our Hardware and Software </p>
                    </div>
                    <div className='flex -ml-3'>
                    <FaCheck  className='text-yellow-50   w-16 mt-1'/>
                    <p>IT consultancy, IT Moves, Relocation and IT network services </p>
                    </div>
              </div>
  
              </div>
            </div>
            {/*right image */}
            <div className=' p-2 w-[48%]' >
                <img className='top-10 relative' src={productsAndServices} />
  
            </div>
          </div>
        </section>
  
    
    {/* banner */}
    <section class=" w-full lg:mt-28 h-full bg-no-repeat bg-cover relative ctaSection min-h-[510px]">
      <div class="w-10/12 max-w-[1080px] relative flex flex-row items-center mx-auto justify-between space-x-20 pt-16">
  
        <div class="flex flex-col gap-5 mt-12 max-w-[600px]">
          <h2 class="font-mullish font-bold text-2xl text-white">Supercharge Your Network with Our Cutting-Edge Solutions</h2>
          <div class="w-6 h-1 bg-greenLight"></div>
          <p class="font-mullish text-white">Contact us now to experience the future of networking <br/> and provide your business with the most reliable and secure connectivity solutions</p>
  
          <ul class="flex flex-row flex-wrap gap-x-11 text-white gap-y-3">
            <li class="font-mullish text-white flex flex-row ">
              <i data-feather="check" class="text-greenLight"></i>
              <span>Annual Maintenance Contracts
              </span>
              </li>
            <li class="font-mullish text-white flex flex-row ">
              <i data-feather="check" class="text-greenLight"></i>
              <span>Service Level Agreements
  
              </span>
            </li >
            <li class="font-mullish text-white flex flex-row ">
              <i data-feather="check" class="text-greenLight"></i>
              <span>Remote assitance
  
              </span>
            </li>
            <li class="font-mullish text-white flex flex-row ">
              <i data-feather="check" class="text-greenLight"></i>
              <span>On call bases
              </span>
            </li>
          </ul>
  
          
          </div>
          <img src={bannerImage} alt="" width="240px" height="282px" 
        className="mt-2 pt-3 hidden lg:block"/>
  
  
        </div>
      </section>
        <Contact/>
        <div className='footer text-white border-t-2 border-richblack-5 bg-[#181c2e] h-[350px]'>
  
          <div className='w-10/12 mt-5 h-full mx-auto flex justify-center gap-x-[60px]'>
            {/* logo and address */}
            <div className='flex flex-col gap-y-3 w-[300px]'>
                    <img src={aeontech} className='h-[50px]'/>
                    <p>UNIT NO. 343, GALA COMPLEX, DUMPING ROAD, MULUND (W), MUMBAI - 400 080</p>
            </div>
            {/* About us */}
            <div className='flex flex-col gap-y-3 w-[200px] '>
                    <h1 className='text-xl font-semibold'>ABOUT US</h1>
                    <p>AEONTECH NETWORKS LLP S IS MUMBAI BASED SYSTEM INTEGRATION AND SERVICE COMPANY COMMITTED TO DELIVERING THE BEST-IN-CLASS IT SOLUTIONS.</p>
            </div>
            {/* Information */}
            <div className='flex flex-col gap-y-3'>
            <h1 className='text-xl font-semibold'>INFORMATION</h1>
                    <ul className='flex flex-col gap-y-3'>
                      <li>HOME</li>
                      <li>ABOUT US</li>
                      <li>SERVICES</li>
                      <li>SOLUTIONS</li>
                      <li>CAREER</li>
                      <li>CONTACT</li>
                    </ul>
                    
            </div>
            {/* Contact us*/}
            <div className='flex flex-col gap-y-3'>
            <h1 className='text-xl font-semibold'>CONTACT US</h1>
            <p className='text-lg'>AEONTECH NETWORKS LLP</p>
            <div className='flex flex-col gap-y-2'>
  
            <p>EMAIL ID: support@aeontech.in</p>
            <p>+91 89767-08970</p>
            </div>
  
            </div>
          </div>  
          </div>
  
  
        </div>
      
        
      )
        
  
     
  
    )
  }
  
  export default Home;