import CardComponent from "./components/card/card.component";

function App() {
  return (
    <div className="container">
      <CardComponent
        title="An Amazing journey"
        description="Our journey thro space exploration"
        imgUrl="https://plus.unsplash.com/premium_vector-1721569648469-97f6c6017148?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
      />
      <CardComponent
        title="Today is the day"
        description="Come and join us at NTI Södertörn"
        imgUrl="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
      />
    </div>
  );
}

export default App;
