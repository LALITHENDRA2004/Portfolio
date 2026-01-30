import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`py-16 px-6 sm:px-12 md:px-24 scroll-mt-4 ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
