import { Button, Divider, Icon, Paper, Skeleton } from '@mui/material'
import { Box, useTheme } from '@mui/system'

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string

  mostrarBotaoSalvar?: boolean
  mostrarBotaoSalvarEVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoNovo?: boolean
  mostrarBotaoVoltar?: boolean

  mostrarBotaoSalvarCarregando?: boolean
  mostrarBotaoSalvarEVoltarCarregando?: boolean
  mostrarBotaoApagarCarregando?: boolean
  mostrarBotaoNovoCarregando?: boolean
  mostrarBotaoVoltarCarregando?: boolean

  aoClicarEmSalvar?: () => void
  aoClicarEmSalvarEVoltar?: () => void
  aoClicarEmApagar?: () => void
  aoClicarEmNovo?: () => void
  aoClicarEmVoltar?: () => void
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEVoltar = false,
  mostrarBotaoApagar = true,
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,

  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,

  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar,
  aoClicarEmApagar,
  aoClicarEmNovo,
  aoClicarEmVoltar,
}) => {
  const theme = useTheme()
  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
      onClick={aoClicarEmSalvar}
    >
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={61} />}

      {mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEVoltar}
        >
          Salvar e voltar
        </Button>
      )}

      {mostrarBotaoSalvarEVoltarCarregando && (
        <Skeleton width={180} height={61} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          Apagar
        </Button>
      )}

      {mostrarBotaoApagarCarregando && <Skeleton width={110} height={61} />}

      {mostrarBotaoNovo && !mostrarBotaoApagarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          {textoBotaoNovo}
        </Button>
      )}

      {mostrarBotaoNovoCarregando && <Skeleton width={110} height={61} />}

      <Divider variant="middle" orientation="vertical" />

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          Voltar
        </Button>
      )}

      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={61} />}
    </Box>
  )
}
