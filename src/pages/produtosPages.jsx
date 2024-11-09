import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function GroupExample() {

    let receitas = [
        {
            thumbnail: "/src/assets/macarrao-com-molho-de-linguica-toscana.jpg",
            nome: "Macarronada com molho de linguiça toscana",
            descricao: "Macarronada com molho de linguiça toscana: macarrão al dente em molho fresco, com pedaços de linguiça suculenta e ervas aromáticas, finalizado com parmesão.",
            preco:"R$ 29,90"
        },
        {
            thumbnail: "/src/assets/Nhoque-recheado-com-presunto-queijo-e-Catupiry.jpg",
            nome: "Nhoque recheado com presunto, queijo e Catupiry",
            descricao: "Nhoque macio, recheado com presunto, queijo e Catupiry, coberto com molho cremoso que derrete na boca. Perfeito para um almoço especial.",
            preco:"R$ 34,90"
        },
        {
            thumbnail: "/src/assets/Lasanha-a-bolonhesa-com-bacon.jpg",
            nome: "Lasanha à bolonhesa com bacon e queijo",
            descricao: "Lasanha em camadas de molho bolonhesa, queijo e bacon crocante, criando uma combinação saborosa e suculenta para amantes de massa.",
            preco:"R$ 36,90"
        },
        {
            thumbnail: "/src/assets/Panqueca-de-frango-e-bacon.jpg",
            nome: "Panqueca de frango, bacon e molho cremoso",
            descricao: "Panqueca recheada com frango desfiado e bacon crocante, servida com molho cremoso. Uma combinação deliciosa e prática para qualquer refeição.",
            preco:"R$ 24,90"
        },
        {
            thumbnail: "/src/assets/macarrao-de-forno-com-frango-e-molho-branco.jpeg",
            nome: "Macarrão de forno com frango e molho branco",
            descricao: "Macarrão gratinado com frango suculento e molho branco, coberto com queijo dourado. Prato cremoso e reconfortante para compartilhar.",
            preco:"R$ 32,90"
        },
        {
            thumbnail: "/src/assets/rondele-de-espinafre-1.jpg",
            nome: "Rondele de Espinafre",
            descricao: "Massa recheada com espinafre e queijo, envolta em molho cremoso. Rondele leve e saboroso, perfeito para refeições nutritivas e elegantes.",
            preco:"R$ 28,90"
        },
    ];

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="d-flex align-items-center">

                    <Navbar.Brand href="#">
                        <Image src="/src/assets/logo.png" alt="Logo" height="100" />
                    </Navbar.Brand>
                    
                    <Navbar.Text className="mx-auto fs-4">
                        Viva La Pasta
                    </Navbar.Text>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Row>
                    {receitas.map((receita, index) => 
                        <Col md={4} key={index}>
                            <Card className="p-0 mb-2">
                                <Card.Img variant="top" src={receita.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{receita.nome}</Card.Title>
                                    <Card.Text>{receita.descricao}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{receita.preco}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default GroupExample;
