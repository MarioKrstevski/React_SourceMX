const { isOn: isAudioOn, toggle: audioToggle } = useToggle();
const [isAudioOn, audioToggle] = useToggle();
const { isOn: isPicOn, toggle: pictureToggle } = useToggle();

const { pokemon, refetch, loading } = useFetchPokemon();


function useToggle(initial = false) {
    const [isOn, setIsOn] = useState(initial);
  
    function toggle() {
      setIsOn(!isOn);
    }
  
    return {
      isOn,
      toggle,
    };
  
    return [isOn, toggle];
  }
  
  function useFetchPokemon() {
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      async function getPoke() {
        const POKEURL = "https://";
        setIsLoading(true);
        axios
          .get(POKEURL)
          .then((json) => {
            setData(json.data);
            setIsLoading(false);
          })
          .catch((e) => {
            setIsLoading(false);
          });
      }
  
      getPoke();
    }, [counter]);
  
    function refetch() {
      setCounter(counter + 1);
    }
  
    return {
      pokemon: data,
      refetch,
      loading: isLoading,
    };
  }
  