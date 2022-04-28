import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const animateInOut = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
}

const Transition: FC< { children: ReactNode } > = ( {children}: { children: ReactNode } ) => {
    return (
        <motion.div variants={animateInOut} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            {children}
        </motion.div>
    );
};

export default Transition;