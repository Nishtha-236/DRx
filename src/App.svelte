<script>
  import PatientRegistration from "./components/PatientRegistration.svelte";
  import { Router, Route } from "svelte-routing";
  import Layout from "./components/Layout.svelte";
  import Home from "./components/Home.svelte";
  import HomePageList from "./components/HomePageList.svelte";
  import Clinical from "./components/Clinical.svelte";
  
</script>

<Router>
  <Layout>
    <Route path="/" component={Home} />
    <Route path="list/" component={Home} />
    <Route path="list/:view" component={HomePageList} />
    <Route path="patient/" component={PatientRegistration} />
    <Route path="patient/:id" component={PatientRegistration} />
    <Route path="clinical/:ehrId/*" component={Clinical} />

  </Layout>
</Router>
