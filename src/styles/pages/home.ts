import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',

  marginLeft: "auto",

  minHeight: 565,
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  width: '100%',
});

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  cursor: 'pointer',

  borderRadius: 8,

  minWidth: 540,

  position: 'relative',

  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    borderRadius: 6,

    padding: '1rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      color: '$gray100',
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
});

export const getServerSideProps = () => {
  return {
    props: {

    }
  }
}