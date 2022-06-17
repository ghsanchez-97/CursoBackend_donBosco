const onlyBody = async ({ schema, node, req }) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false, allowUnknown: true, stripUnknown: true })
    return
  } catch (error) {
    const { type, path } = error.details[0]
    throw String(req.t(`joi.${node}.${path}.${type}`))
  }
}
const reqParserStrategy = {}

reqParserStrategy.onlyBody = onlyBody

const selectParserStrategy = async (props) => {
  return await reqParserStrategy[`${props.parserStrategy}`](props)
}

class RequestValitionStrategy {
  static async genericStrategyHandler (props) {
    try {
      await selectParserStrategy({
        schema: props.schema,
        node: props.node,
        req: props.req,
        parserStrategy: props.parserStrategy
      })
      props.next()
    } catch (error) {
      console.log(error)
      props.next()
    }
  }
}

export const reqValidationSelectorHandler = ({
  schema,
  node,
  validationStrategy,
  parserStrategy = null
}) => async (req, res, next) => await RequestValitionStrategy[`${validationStrategy}`]({
  schema,
  node,
  parserStrategy,
  req,
  next
})
