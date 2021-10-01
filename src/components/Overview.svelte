<script lang="ts">
  import { fhir, openehr } from "../services";
  import { onMount } from "svelte";
  import {Route, Router } from "svelte-routing";
  export let ehrId: string;
  import "@shoelace-style/shoelace/dist/components/format-date/format-date";
  import "@shoelace-style/shoelace/dist/components/skeleton/skeleton";

  import { allCompositions } from "./aqls";
import Opd from "./Opd.svelte";

</script>

<Router>
  <Route path='/' component={Opd}></Route>
  
</Router>