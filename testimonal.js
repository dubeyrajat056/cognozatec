let index = 0;
        const slider = document.querySelector('.testimonial-slider');
        const testimonials = document.querySelectorAll('.testimonial');
        const totalTestimonials = testimonials.length;

        function autoSlide() {
            index++;
            if (index === totalTestimonials) {
                index = 0;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(autoSlide, 6000); // Slide every 6 seconds