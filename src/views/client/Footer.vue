<template>
	<!-- Start footer area -->
	<footer id="footer" class="footer-area bg-2 bg-opacity-black-90">
		<div class="footer-top pt-110 pb-80">
			<div class="container">
				<div class="row">
					<!-- footer-address -->
					<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div class="footer-widget">
							<h6 class="footer-titel">GET IN TOUCH</h6>
							<ul class="footer-address">
								<li>
									<div class="address-icon">
										<img
											src="/src/assets/website/images/icons/location-2.png"
											alt=""
										/>
									</div>
									<div class="address-info">
										<span>8901 Marmora Raod,</span>
										<span>Glasgow, D04 89GR</span>
									</div>
								</li>
								<li>
									<div class="address-icon">
										<img
											src="/src/assets/website/images/icons/phone-3.png"
											alt=""
										/>
									</div>
									<div class="address-info">
										<span>Telephone : (801) 4256 9856</span>
										<span>Telephone : (801) 4256 9658</span>
									</div>
								</li>
								<li>
									<div class="address-icon">
										<img
											src="/src/assets/website/images/icons/world.png"
											alt=""
										/>
									</div>
									<div class="address-info">
										<span>Email : info@sheltek.com</span>
										<span
											>Web :<a href="#" target="_blank">
												www.sheltek.com</a
											></span
										>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- footer-latest-news -->
					<div class="col-lg-6 col-md-5 hidden-sm col-xs-12">
						<div class="footer-widget middle">
							<h6 class="footer-titel">LATEST NEWS</h6>
							<ul class="footer-latest-news">
								<li>
									<div class="latest-news-image">
										<a href="single-blog.html"
											><img
												src="/src/assets/website/images/blog/1.jpg"
												alt=""
										/></a>
									</div>
									<div class="latest-news-info">
										<h6>
											<a href="single-blog.html"
												>Beautiful Home</a
											>
										</h6>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur acinglit sed do eiusmod
											tempor inciidunt ut labore
										</p>
									</div>
								</li>
								<li>
									<div class="latest-news-image">
										<a href="single-blog.html"
											><img
												src="/src/assets/website/images/blog/2.jpg"
												alt=""
										/></a>
									</div>
									<div class="latest-news-info">
										<h6>
											<a href="single-blog.html"
												>Beautiful Home</a
											>
										</h6>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur acinglit sed do eiusmod
											tempor inciidunt ut labore
										</p>
									</div>
								</li>
								<li>
									<div class="latest-news-image">
										<a href="single-blog.html"
											><img
												src="/src/assets/website/images/blog/3.jpg"
												alt=""
										/></a>
									</div>
									<div class="latest-news-info">
										<h6>
											<a href="single-blog.html"
												>Beautiful Home</a
											>
										</h6>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur acinglit sed do eiusmod
											tempor inciidunt ut labore
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- footer-contact -->
					<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
						<div class="footer-widget">
							<h6 class="footer-titel">QUICK CONTACT</h6>
							<div class="footer-contact">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									acinglit sed do eiusmod tempor
								</p>
								<form
									id="contact-form-2"
									action="mail_footer.php"
									method="post"
								>
									<input
										type="email"
										name="email2"
										placeholder="Type your E-mail address..."
									/>
									<textarea
										name="message2"
										placeholder="Write here..."
									></textarea>
									<button type="submit" value="send">
										Send
									</button>
								</form>
								<p class="form-messege"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="copyright text-center">
							<p>
								Copyright &copy; 2016
								<a
									href="https://themeforest.net/user/devitems/portfolio"
									><b>Devitems</b></a
								>. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- End footer area -->
</template>
<script>
export default {
	name: "Footer"
};
</script>
<style lang="css">
/* -----------------------------------
  Template Name: Sheltek - Real Estate HTML Template

  NOTE: This is Footer style file. All footer related style included in this file.

--------------------------------------*/

/* =================================
  Footer
================================= */
.footer-area {
	background-attachment: inherit;
}
.footer-widget {
}
.footer-titel {
	color: #fefefe;
	margin-bottom: 30px;
	text-transform: uppercase;
}
/*footer-address*/
.footer-address > li + li {
	/*border-top: 1px solid #73716f;*/
	padding-top: 15px;
}
.footer-address > li {
	overflow: hidden;
	padding-bottom: 10px;
}
.address-icon {
	float: left;
	width: 15%;
}
.address-info {
	float: left;
	width: 85%;
}
.address-info > span {
	display: block;
	font-size: 12px;
	font-weight: 300;
	line-height: 20px;
}

/*footer-latest-news*/
.footer-widget.middle {
	margin: auto;
	width: calc(100% - 100px);
}
.footer-latest-news > li {
	overflow: hidden;
}
.footer-latest-news > li + li {
	padding-top: 34px;
}
.latest-news-image {
	float: left;
	width: 18%;
}
.latest-news-info {
	float: left;
	padding-left: 20px;
	width: 82%;
}
.latest-news-info > p {
	font-size: 12px;
	line-height: 20px;
	margin-bottom: 0;
}
.latest-news-info > h6 {
	color: #c7c7c7;
	font-family: "montserrat";
	font-size: 14px;
	font-weight: 400;
	line-height: 1;
	margin-bottom: 5px;
}

/*footer-contact*/
.footer-contact > p {
	font-size: 12px;
	line-height: 20px;
}
.footer-contact input {
	border-color: #706e6d;
	height: 35px;
	font-size: 12px;
}
.footer-contact textarea {
	background: transparent none repeat scroll 0 0;
	border: 1px solid #706e6d;
	box-shadow: none;
	font-size: 12px;
	font-weight: 300;
	height: 80px;
	line-height: 22px;
	margin-bottom: 17px;
	padding: 5px 10px;
}
.footer-contact button {
	background: #c5c5c5 none repeat scroll 0 0;
	color: #000000;
	padding: 3px 15px;
	text-transform: uppercase;
	transition: all 0.3s ease 0s;
}
.footer-contact button:hover {
	background: #95c41f none repeat scroll 0 0;
	color: #fff;
}
.footer-contact input::-webkit-input-placeholder {
	color: #919191;
	font-size: 12px;
}
.footer-contact input::-moz-placeholder {
	color: #919191;
	font-size: 12px;
}
.footer-contact input:-ms-input-placeholder {
	color: #919191;
	font-size: 12px;
}
.footer-contact input:-moz-placeholder {
	color: #919191;
	font-size: 12px;
}
.footer-contact textarea::-webkit-input-placeholder {
	color: #919191;
	font-size: 12px;
}
.footer-contact textarea::-moz-placeholder {
	color: #919191;
	font-size: 12px;
}
.footer-contact textarea:-ms-input-placeholder {
	color: #919191;
	font-size: 12px;
}
.footer-contact textarea:-moz-placeholder {
	color: #919191;
	font-size: 12px;
}
/*copyright*/
.footer-bottom {
	background: rgba(23, 23, 23, 0.7) none repeat scroll 0 0;
	border-top: 1px solid #484848;
	padding: 20px 0;
}
.copyright > p {
	font-size: 13px;
	font-weight: 300;
	margin-bottom: 0;
}
.copyright a {
	color: #95c41f;
}

.address-info > span,
.latest-news-info > p,
.footer-contact > p,
.footer-contact input,
.footer-contact textarea,
.copyright > p {
	/*color: #919191;*/
	color: #ccc;
}
</style>
