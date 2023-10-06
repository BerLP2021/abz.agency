import { useRef, useEffect, useState } from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import variables  from '../../../styles/variables.scss';
import './overflowTip.scss';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip leaveDelay={0} 
            followCursor 
            classes={{ popper: className }} 
            {...props} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 'none',
      wordBreak: 'break-all',
      fontSize: variables.fontSizeMain,
      borderRadius: '4px',
      padding: '3px 16px',
    },
}));

const OverflowTip = ({name, link, style}) => {
    const textElementRef = useRef(null);
    const [hoverStatus, setHover] = useState(false);

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    const handleOpen = () => setOpen(true);

    const compareSize = () => {
        const compare =
            textElementRef.current.scrollWidth > textElementRef.current.clientWidth;
        setHover(compare);
    };

    useEffect(() => {
        compareSize();
    }, [name]);

    useEffect(() => {
        window.addEventListener('resize', compareSize);
        return () => {
            window.removeEventListener('resize', compareSize);
        }
    }, []);

    const elStyle = {
        textDecoration: 'none',
        color: 'currentColor',
        display: 'block',
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...style
    };
    
    const Element = link ? 'a' : 'div';

    return (
        <CustomTooltip
            open={open} 
            onClose={handleClose} 
            onOpen={handleOpen}
            title={name}
            className='tooltip-topmargin'
            disableHoverListener={!hoverStatus}
        >
            <Element
                href={link} 
                ref={textElementRef}
                style={elStyle}
            >
                {name}
            </Element> 
        </CustomTooltip>
    );
};

export default OverflowTip;