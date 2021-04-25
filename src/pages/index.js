import styled from "styled-components"

const StoriesGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  & > div:first-of-type {
    border-top: 5px solid #e6496b;
  }
`
const StoriesApp = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-x: scroll;
  padding: 0 9rem;
`

const StoriesColum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
`

const StoryCard = styled.div`
  padding: 1rem;
  width: 400px;
  min-height: 500px;
  background-color: ${props => (props.isDraggingOver ? "lightblue" : "white")};
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
`

/* const MyCardX = styled.div`
  user-select: none;
  padding: 16px;
  margin: 0 0 8px 0;
  min-height: 50px;
  color: white;
  background-color: ${props => (props.isDragging ? "darkorange" : "darkcyan")};
` */
// TODO: update schema  => FAUNADB

const IndexPage = () => {}

/* const IndexPage = () =>{
  // items
  const [setStatus, columns, setColumns] = useStories()
  const reloadData = () => setStatus("loading")



  // Columns
  
  console.log(columns)

  if(columns){
  console.log("Entries",Object.entries(columns))
  }


  const handleOnDragEnd = (result) => {
    console.log(result)
    const {source,destination} = result;

    if(!destination) return;
    
    // Misma Columnna
    if(source.droppableId !== destination.droppableId){
      console.log("!= column");

      // Origen y Destino
      const sourceColumn = columns[source.droppableId]
      const destinationColumn = columns[destination.droppableId]

      // items
      const sourceItems = [...sourceColumn.items]
      const destinationItems = [...destinationColumn.items]


      // reorderedITem
    const [reorderedItem] = sourceItems.splice(source.index,1)
      destinationItems.splice(destination.index,0,reorderedItem)
    
     //TODO: set New State

  

    setColumns({
      ...columns,
      [source.droppableId]:{...sourceColumn,items:sourceItems},
      [destination.droppableId]:{...destinationColumn,items:destinationItems}
    })

    }else{
      console.log("== column");
      if (destination.index === source.index) return

      const column = columns[source.droppableId]
      console.log(column)
      
      // New State
      const copiedItemsFromState = [...column.items]
      const [reorderedItem] = copiedItemsFromState.splice(source.index,1);
      console.log(reorderedItem);
      copiedItemsFromState.splice(destination.index,0,reorderedItem);
      console.log("new orden",copiedItemsFromState)

      //TODO: set New State
      setColumns({
        ...columns,
        [source.droppableId]:{...column,items:copiedItemsFromState}
      })
    }
    
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Form reloadData={reloadData} />

      <DragDropContext onDragEnd={handleOnDragEnd}>
        {columns ? (
          <StoriesApp>
            {Object.entries(columns).map(([id, column]) => (
              <StoriesColum key={id}>
                <h2>{column.name}</h2>
              
                <Droppable droppableId={id}>
                  {(provided, snapshot) => (
                    <StoryCard
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      isDraggingOver={snapshot.isDraggingOver}
                    >
                    

                      {column.items.map((item, index) => (
                        <Draggable
                          key={index}
                          draggableId={item._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Stories
                              innerRef={provided.innerRef}
                              provided={provided}
                              story={item}
                              reloadData={reloadData}
                              style={{ ...provided.draggableProps.style }}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </StoryCard>
                  )}
                </Droppable>
              </StoriesColum>
            ))}
          </StoriesApp>
        ) : (
          <p>Loading...</p>
        )}
      </DragDropContext>
    </Layout>
  )
    }

 */

/* const handleOnDragEnd = result => {
    const { source, destination } = result

    if (!destination) return
    if (destination.index === source.index) return

    console.log(
      "Current Priority",
      destination,
      stories[destination.index].title
    )
    console.log("source", source, stories[source.index].title)

    const copyState = Array.from(stories)
    const [reorderedItem] = copyState.splice(source.index, 1)
    copyState.splice(destination.index, 0, reorderedItem)

    // TODO: update setStories
    setStories(copyState)
  } */

/*  return (
    <Layout>
      <SEO title="Home" />
      <Form reloadData={reloadData} />
      {stories ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="stories">
            {provided => (
              <StoriesGroup
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {stories.map((story, index) => (
                  <Draggable
                    key={story._id}
                    draggableId={story._id}
                    index={index}
                  >
                    {provided => (
                      <Stories
                        innerRef={provided.innerRef}
                        provided={provided}
                        story={story}
                        reloadData={reloadData}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </StoriesGroup>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <p>Loading ......</p>
      )}
    </Layout>
  ) */

export default IndexPage
