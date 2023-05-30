# react-boilerplate-client-side-rendering
Client Side Rendering Production Ready Boilerplate(Template)

This project is a React JS boilerplate that can be used to kickstart a production ready web application.

The boilerplate provides **an optimized module based architecture for building solid web applications** through **Container-View** - design pattern which is used in this architecture.

```
If you love this boilerplate, give us a star :)
```

### Container-View design pattern
• Container/View pattern (also known as Presentational/Container, Smart/Dumb) is a technique of splitting components into 'Containers' which are responsible for any stateful logic and data fetching and 'Views' which are responsible for data presentation.
• It used to increase the reusability of views

### Boilerplate Architecture

<div align="center">
    <img src="documentation/static/architecture.png" alt="architecture" width="100%">
</div>

#### Module:
• All the various modules like Claim, PDM, Team Workload etc are module.
• Each module consists of container, component and slice, container consist of index.js file which exports the module container as a default module which makes the screen available as a functional component.
#### Component:
• Component hold UIControl and other common components too to display data, capture user event.
#### UIControl:
• UIControls like buttons, checkbox, dropdown etc.
• It can be reused in components to increase code reusability hence increase development speed
#### Redux:
• If any event occurs from component, it dispatches action. Events like fetch data, button press, filter data etc.
• If action is of async/thunk(Asynchronous) type then it will go to middleware to fetch data otherwise it directly go to Reducer.
• After getting the payload(data) from successful async, it updates its state immutably, by making copies of the parts of the state that need to change and only modify those copies.
• By using selector component will get data from store, if data changes UI re-renders.
#### Middleware:
• Depending on type of request it calls api using AXIOS library or the data which is available in JSON file.

