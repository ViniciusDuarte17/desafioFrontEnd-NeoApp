
export const goToHome = (navigate) => {
    navigate('/')
} 

export const goToComicsDetail = (navigate,id) => {
    navigate(`/detalhes/${id}`)
}

export const goToCart = (navigate) => {
    navigate('/carrinho')
}