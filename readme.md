<section>
        {foods.map((food) => (
          <div className="card" key={food.id}>
            <ImageBox isActive={food.available}>
              <img src={food.image} alt={food.name} />
            </ImageBox>

            <div className="description">
              <h1>{food.name}</h1>
              <p>{food.description}</p>
              <strong>{food.priceFormatted}</strong>
            </div>

            <footer>
              <div className="buttons">
                <button className="edit">
                  <FiEdit3 size={20} />
                </button>
                <button className="delete" onClick={() => removeFood(food.id)}>
                  <AiOutlineDelete size={20} />
                </button>
              </div>

              <div className="switch-container">
                <p>{food.available ? "Disponível" : "Indisponível"}</p>

                <label
                  htmlFor={`available-switch-${food.id}`}
                  className="switch"
                >
                  <input
                    id={`available-switch-${food.id}`}
                    type="checkbox"
                    checked={food.available}
                    onChange={() => toggleAvailable(food.id)}
                  />
                  <span className="slider" />
                </label>
              </div>
            </footer>
          </div>
        ))}
      </section>