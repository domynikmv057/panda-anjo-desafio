import "./ProductDescription.css";

export const ProductDescription = () => {
  return (
    <section className="main-container-prodDesc">
      <h1>Detalhes do produto</h1>
      <p>
        O Santo Óleo de Coco Virgem é um produto 100% natural e obtido através
        da parte branca carnosa e da película marrom. Sua coloração é um pouco
        amarelada e sua acidez máxima é de 0 5%. Indicação de uso: Preparação de
        alimentos quentes como bolos tortas arroz frituras etc.
      </p>
      <div className="desc-list">
        <span>Sem conservantes e/ou produtos químicos</span>
        <span>Não contém glúten</span>
        <span>Prensado à frio </span>
        <span>Acidez abaixo de 0 5% </span>
        <span>Extraído da polpa da fruta </span>
        <span>Não refinado e não hidrogenado</span>
      </div>
    </section>
  );
};
